// GET /quixes/question
exports.question = function(reg, res){
    res.render('quizes/question', {pregunta: 'Capital de Italia'});
};


// GET /quixes/answer
exports.answer = function(reg, res){
    if(reg.query.respuesta === 'Roma'){
        res.render('quizes/answer', {respuesta: 'Correcto'});
    } else {
        res.render('quizes/answer', {respuesta: 'Incorrecto'});
    }

};


