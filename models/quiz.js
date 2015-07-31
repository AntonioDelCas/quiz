//Definición del modelo de Quiz

module.exports = function(sequalize, DataTypes){
    return sequalize.define(
        'Quiz',
        {
            pregunta: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "-> Falta pregunta"}}
            },

            respuesta: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "-> Falta respuesta"}}
            }
        }
    );
}