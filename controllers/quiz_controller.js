var models = require('../models/models.js');


// GET /quixes/question
exports.question = function(reg, res){
    models.Quiz.findAll().success(function(quiz){
        res.render('quizes/question', {pregunta: quiz[0].pregunta});
    })
};


// GET /quixes/answer
exports.answer = function(reg, res){
    models.Quiz.findAll().success(function(quiz){
        if(reg.query.respuesta === quiz[0].respuesta){
            res.render('quizes/answer', {respuesta: 'Correcto'});
        } else {
            res.render('quizes/answer', {respuesta: 'Incorrecto'});
        }
    })
};