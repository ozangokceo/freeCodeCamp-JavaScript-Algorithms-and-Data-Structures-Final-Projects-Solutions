function rot13(str = "") {
    let splitStr = str.split("");
    let decipheredStringArray = [];
    for (let i = 0; i < splitStr.length; i++) {
      let regex = /[A-Za-z0-9]/;
      if(!regex.test(splitStr[i])) {
        decipheredStringArray.push(splitStr[i]);
        continue;
      }
      let shiftedCodePointValue = splitStr[i].codePointAt(0) - 13;
      if(shiftedCodePointValue < 65) {
        shiftedCodePointValue = 90 - (65 - shiftedCodePointValue - 1);
      }
      decipheredStringArray.push(String.fromCodePoint(shiftedCodePointValue));
    }
    return decipheredStringArray.join("");
  }
  
  //tests..
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));