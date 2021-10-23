function convertToRoman(number) {
    let numArray = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let romanArray = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let romanString = "";
    let i = romanArray.length - 1;
    for(; number > 0; ) {
      let div = Math.floor(number/numArray[i]);
      number = number%numArray[i];
      for(;div > 0; div--) {
        romanString += romanArray[i];
      }
      i--;
    }
    return romanString;
  }
  
  //tests..
  console.log("2 =>", convertToRoman(2));
  console.log("5 =>", convertToRoman(5));
  console.log("16 =>", convertToRoman(16));
  console.log("99 =>", convertToRoman(99));
  console.log("798 =>", convertToRoman(798));
  console.log("1000 =>", convertToRoman(1000));
  console.log("1006 =>", convertToRoman(1006));
  console.log("1023 =>", convertToRoman(1023));
  console.log("2014 =>", convertToRoman(2014));
  console.log("3999 =>", convertToRoman(3999));