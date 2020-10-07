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

// MORSE

document.getElementById("toMorse").addEventListener("click", function(){

  const MORSE_CODE = {"a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",   "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..", '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': ' '};

  let toCode = document.getElementById('msgToMorse').value;
  var words = toCode.split(' '); // split each word
  var coded = [];
  for(var w = 0; w < words.length; w++) { // browse each word
    coded[w] = []; // stock each one of them
    let letters = words[w].split(''); // split every character
    for(var i = 0; i < letters.length; i++){ // browse each character
      coded[w][i] = [];
      if(MORSE_CODE[letters[i]]){ // get the morse equivalent
        coded[w][i].push( MORSE_CODE[letters[i]] );
      }
    }
  }
  let output =  coded.map(arr => arr.join('')).join(' ') //coded.join(' ');
  // output a string
  console.log(output);
  document.getElementById('msgInMorse').innerHTML = output;
});
