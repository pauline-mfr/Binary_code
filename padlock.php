<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Encrypte</title>
</head>
<body>

  <h2> PADLOCK </h2>
  <label for="code">Enter the code</label><br>
  <input type="text" id="solution" maxlength="10"></inpt><input type="submit" value="validate" id="validate"><br><br>

  <div id="lock"></div><br>
  <button id="check" style="display: none;">CHECK</button>

  <script>
  // DISPLAY INPUTS
  let solution = "";
  let idInputs = [];
  let answer = [];
  let answerToCheck = "";
  document.getElementById("validate").addEventListener("click", function(){
    document.getElementById('check').style.display = "block";
    solution += document.getElementById('solution').value;
    let lockCase = [];

    for (var i = 0; i < solution.length; i++) {
      lockCase.push("<input id='input"+i+"' value='' maxlength='1' style='width: 45px; height: 45px;'></input>");
      document.getElementById('lock').innerHTML = lockCase.join(' ');
      idInputs.push("input"+i);
    } // END FOR SOLUTION
  }); // END VALIDATE BUTTON

  document.getElementById("check").addEventListener("click", function(){
    for (var i = 0; i < idInputs.length; i++) {
      answer.push(document.getElementById(idInputs[i]).value);
      answerToCheck = answer.join('');
        } // END FOR INPUTS
    if(answerToCheck == solution) {
      alert("UNLOCKED !");
    }else{
      alert("Try again");
    }
  }); // END CHECK BUTTON
  </script>
</body>
</html>
