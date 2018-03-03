<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
        <title>Pi-Car Controls</title>
        <link rel="stylesheet" href="style.css" />
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body onload="initialize()">
        <div id="wrapper" class="main" unselectable="on">
            <button class="controls" type="button" name="restart" id="restart"></button>
            <button class="controls" type="button" name="shutdown" id="shutdown"></button>
            <button class="controls" type="button" name="up" id="up"></button>
            <button class="controls" type="button" name="down" id="down"></button>
            <button class="controls" type="button" name="left" id="left"></button>
            <button class="controls" type="button" name="right" id="right"></button>
        </div>
        <div id="warning-message" class="main" unselectable="on">
            <h1>The page must be viewed in landscape mode</h1>
            <img src="img/rotate.gif" alt="">
        </div>
    </body>
</html>
