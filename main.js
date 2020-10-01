// BINARY
document.getElementById("convert").addEventListener("click", function() {
  let code = document.getElementById('msgToCode').value;
  console.log("valeur de l'input = "+code);
      let crypted = [];
  for (var i = 0; i < code.length; i++) {
    console.log(Number(code.charCodeAt(i)).toString(2));
     crypted.push((Number(code.charCodeAt(i)).toString(2)));
     document.getElementById('crypted').innerHTML = crypted;
  }

});
