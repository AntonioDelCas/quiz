var path = require('path');
// Postgres DATABASE_URL = postgres://user:passwd@host:port/database
// SQlite DATABASE_URL = sqlite://:@:/
var url = proocess.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6]||null);
var user = (url[2]||null);
var pwd = (url[3]||null);
var protocol = (url[1]||null);
var dialect = (url[1]||null);
var port = (url[5]||null);
var host = (url[4]||null);
var storage = process.env.DATABASE_STORAGE;



//Cargar Modelo ORM
/*var Sequalize = new Sequalize(null, null, null,
    {dialect: "sqlite", storage:"quiz.sqlite"}
);*/
var sequelize = new Sequelize(DB_name, user, pwd,
    {   dialect:    dialect,
        protocol:   protocol,
        port:       port,
        host:       host,
        storage:    storage, //solo SQLite (.env)
        omitNull:   true //solo Postgres
    }
);


//Importar la definición de la tabla Quiz en quiz.js
var quiz_path = path.join(__dirname, 'quiz');
var Quiz = sequalize.import(quiz_path);
//var Quiz = sequalize.import(path.join(__dirname,'quiz'));

exports.Quiz = Quiz; //Exportare definción de tabla Quiz

// sequalize.sync() crea e inicializa tabla de preguntas en DB
//sequalize.sync().success(function(){
sequalize.sync().then(function(){
    //success(...) ejecuta el manejador una vez creeda la tabla
    Quiz.count().success(function(count){
        if(count===0){ //la tabla se inicializa solo si está vacía
        Quiz.create({   pregunta: 'Capital de Italia',
                        respuesta: 'Roma'
                    })
        .success(function(){console.log('Base de datos inicializada')});
        };
    });
});