<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"><title>Quiz</title>
        <link rel='stylesheet' href='/stylesheets/style.css'/>
    </head>
    <body>
        <h2>Quiz: El juego de las preguntas</h2>

        <form method="get" action="/quizes/answer">
            <p>Pregunta: <%= pregunta %> </p>
            <input type="text" name="respuesta" value="responda aquí"/>
            <input type="submit" value="Enviar">
        </form>
    </body>
</html>