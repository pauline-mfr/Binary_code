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

  const MORSE_CODE = {"a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",   "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": ".--", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..", '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': ' '};

  let toCode = document.getElementById('msgToMorse').value.toLowerCase();
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


// BETAMAZE

document.getElementById("toBeta").addEventListener("click", function(){

  const BETAMAZE_CODE = {"a": "<img src='img/a.png'>", "b": "<img src='img/b.png'>", "c": "<img src='img/c.png'>", "d": "<img src='img/d.png'>", "e": "<img src='img/e.png'>", "f": "<img src='img/f.png'>", "g": "<img src='img/g.png'>", "h": "<img src='img/h.png'>", "i": "<img src='img/i.png'>", "j": "<img src='img/j.png'>", "k": "<img src='img/k.png'>", "l": "<img src='img/l.png'>", "m": "<img src='img/m.png'>", "n": "<img src='img/n.png'>", "o": "<img src='img/o.png'>", "p": "<img src='img/p.png'>", "q": "<img src='img/q.png'>", "r": "<img src='img/r.png'>", "s": "<img src='img/s.png'>", "t": "<img src='img/t.png'>", "u": "<img src='img/u.png'>", "v": "<img src='img/v.png'>", "w": "<img src='img/w.png'>", "x": "<img src='img/x.png'>", "y": "<img src='img/y.png'>", "z": "<img src='img/z.png'>", '1': '<img src="img/1.png">', '2': '<img src="img/2.png">', '3': '<img src="img/3.png">', '4': '<img src="img/4.png">', '5': '<img src="img/5.png">', '6': '<img src="img/6.png">', '7': '<img src="img/7.png">', '8': '<img src="img/8.png">', '9': '<img src="img/9.png">', '0': '<img src="img/0.png">', '.': '<img src="img/period.png">', ',': '<img src="img/comma.png">', "'": '<img src="img/quote.png">',  '(': '<img src="img/parenthesis.png">', ')': '<img src="img/parenthesis.png">', ':': '<img src="img/colon.png">', ';': '<img src="img/semicolon.png">'};

  let toCode = document.getElementById('msgToBeta').value.toLowerCase();
  var words = toCode.split(' '); // split each word
  var coded = [];
  for(var w = 0; w < words.length; w++) { // browse each word
    coded[w] = []; // stock each one of them
    let letters = words[w].split(''); // split every character
    for(var i = 0; i < letters.length; i++){ // browse each character
      coded[w][i] = [];
      if(BETAMAZE_CODE[letters[i]]){ // get the morse equivalent
        coded[w][i].push( BETAMAZE_CODE[letters[i]] );
      }
    }
  }
  let output =  coded.map(arr => arr.join('')).join('<img src="img/space.png">');
  // output a string
  console.log(output);
  document.getElementById('msgInBeta').innerHTML = output;
});

// COLORS

document.getElementById("toColor").addEventListener("click", function(){

  const COLOR_CODE = {'1': '<div style="height: 50px; width: 50px; background-color: red; margin: 5px;"></div>', '2': '<div style="height: 50px; width: 50px; background-color: yellow; margin: 5px;"></div>', '3': '<div style="height: 50px; width: 50px; background-color: green; margin: 5px;"></div>', '4': '<div style="height: 50px; width: 50px; background-color: blue; margin: 5px;"></div>', '5': '<div style="height: 50px; width: 50px; background-color: black; margin: 5px;"></div>', '6': '<div style="height: 50px; width: 50px; background-color: Orchid; margin: 5px;"></div>', '7': '<div style="height: 50px; width: 50px; background-color: grey; margin: 5px;"></div>', '8': '<div style="height: 50px; width: 50px; background-color: orange; margin: 5px;"></div>', '9': '<div style="height: 50px; width: 50px; background-color: Crimson; margin: 5px;"></div>', '0': '<div style="height: 50px; width: 50px; background-color: white; margin: 5px; border: 1px solid black;"></div>'};

  let toCode = document.getElementById('nbToColor').value;
  var words = toCode.split(' '); // split each word
  var coded = [];
  for(var w = 0; w < words.length; w++) { // browse each word
    coded[w] = []; // stock each one of them
    let letters = words[w].split(''); // split every character
    for(var i = 0; i < letters.length; i++){ // browse each character
      coded[w][i] = [];
      if(COLOR_CODE[letters[i]]){ // get the morse equivalent
        coded[w][i].push( COLOR_CODE[letters[i]] );
      }
    }
  }
  let output =  coded.map(arr => arr.join('')).join('');
  // output a string
  console.log(output);
  document.getElementById('nbInColor').innerHTML = output;
});
