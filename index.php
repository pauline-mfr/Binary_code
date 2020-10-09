<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Encrypte</title>
  </head>
  <body>

<h2> BINARY </h2>
<label for="code">Enter your message here</label><br>
<textarea type="text" id="msgToCode" value=""></textarea><br>
<input type="submit" value="convert" id="convert"><br><br>

<p>Binary code :</p>
<p id="crypted"></p>

<h2> MORSE </h2>
<label>Enter your message here</label><br>
<textarea type="text" id="msgToMorse" value=""></textarea><br>
<input type="submit" value="convert" id="toMorse"><br><br>

<p>Morse code :</p>
<p id="msgInMorse" style="font-size: 25px;"></p>


<h2> BETAMAZE </h2>
<label>Enter your message here</label><br>
<textarea type="text" id="msgToBeta" value=""></textarea><br>
<input type="submit" value="convert" id="toBeta"><br><br>

<p>Betamaze code :</p>
<p id="msgInBeta"></p>



<h2> COLORS </h2>
<label>Enter numbers here</label><br>
<input type="number" id="nbToColor" value=""></input><br>
<input type="submit" value="convert" id="toColor"><br><br>

<p>Color code :</p>
<div id="nbInColor" style="display: flex;"></div>




  <script type="text/javascript" src="main.js"></script>
  </body>
</html>
