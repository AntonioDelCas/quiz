var models = require('../models/models.js');

// Autoload -factoriza el codigo si ruta incluye :quizId
/*exports.load = function(req, res, next, quizId){
    models.Quiz.find(quizId).then(
        function(quiz){
            if(quiz){
                req.quiz = quiz;
                next();
            } else { next(new Error('No existe quizId=' + quizId));}
        }
    ).cath(function(error){next(error);});
};*/
exports.load = function(req, res, next, quizId) {
    models.Quiz.find(quizId).then(
        function(quiz) {
            if (quiz) {
                req.quiz = quiz;
                next();
            } else { next(new Error('No existe quizId=' + quizId)); }
        }
    ).catch(function(error) { next(error);});
};


// GET /quizes
/*exports.index = function(req, res){
    models.Quiz.findAll().then(
        function(quizes){
            res.render('quizes/index', {quizes: quizes});
    }
    ).catch(function(error){next(error);})
};*/
exports.index = function(req, res) {

    var querySql = {};
    var textoBusqueda = '';
    if( req.query.search === undefined ){
        querySql = {order: 'pregunta ASC'};
        textoBusqueda = 'Mostrando todas ...';
    } else {
        var search = '%' +  req.query.search.replace(/\s+/g,'%') + '%';
        querySql = {where:['pregunta like?', search], order:'pregunta ASC'};
        textoBusqueda = 'Filtrando por ' + req.query.search;

    }

    models.Quiz.findAll(querySql).then(
    //models.Quiz.findAll().then(
        function(quizes) {
            res.render('quizes/index', { quizes: quizes, busqueda: textoBusqueda});
        }
    ).catch(function(error) { next(error);})
};



// GET /quizes/:id
/*exports.show = function(reg, res){
        res.render('quizes/show', {quiz: req.quiz});
};*/
exports.show = function(req, res) {
    res.render('quizes/show', { quiz: req.quiz});
};



// GEt /quizes/:id/answer
/*exports.answer = function(req, res){

    var resultado = 'Incorrecto';
    if(req.query.respuesta === req.quiz.respuesta){
        resultado = 'Correcto';
    }
    res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});

};*/
exports.answer = function(req, res) {
    var resultado = 'Incorrecto';
    if (req.query.respuesta === req.quiz.respuesta) {
        resultado = 'Correcto';
    }
    res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});
};


