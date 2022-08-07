const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  const morseDecoder = {
    10: ".",
    11: "-",
  };

  const morseArr = expr.split("**********");
  let result = [];

  for (item of morseArr) {
    let itemArr = item.split("");
    let word = "";

    while (itemArr.length) {
      let morseLetter = "";
      let letter = itemArr.splice(0, 10).join("");
      letter = letter.replace(/^0+/, "");

      for (let n = 0; n < letter.length; n += 2) {
        let itemDec = letter.slice(n, n + 2);
        morseLetter += morseDecoder[itemDec];
      }
      word += MORSE_TABLE[morseLetter];
    }
    result.push(word);
  }
  return result.join(" ");
}

module.exports = {
  decode,
};
