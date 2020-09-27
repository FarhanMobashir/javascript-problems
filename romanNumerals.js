// my code

// roman
let result = '';
let one = 'I';
  let five = 'V';
  let ten = 'X';
  let fifty = 'L';
  let hundred = 'C';
  let fiveHun = 'D';
  let thousand = 'M';


function appender(n) {

  // exceptional cases

  if(n == 4 && n.length == 1) {
    
    return 'IV' ;
  }
  if(n == 0) {
    
    return '' ;
  }

  if(n == 9 && n.length == 1) {
    
    return 'IX' ;
  }

  if(n == 40 && n.length == 2) {
    
    return 'XL' ;
  }

  if(n == 90 && n.length == 2) {
    
    return 'XC' ;
  }

  if(n == 400 && n.length == 3) {
    
    return 'CD' ;
  }

  if(n == 900 && n.length == 3) {
    
    return 'DM' ;
  }




  // main cases

  if(n < 4 && n > 0 && n.length == 1) {
    
    return one.repeat(n) ;
  }

  if(n < 9 && n >= 5 && n.length == 1) {
    
    return five + one.repeat(n-5) ;
  }

  if(n >= 10 && n < 40 && n.length == 2) {
    
    return ten.repeat(n[0]) ;
  }

  if(n < 90 && n > 40 && n.length == 2) {
    
    return fifty + ten.repeat(n[0]-5) ;
  }

  if(n >= 100 && n < 400 && n.length == 3) {
    
    return hundred.repeat(n[0]) ;
  }

  if(n >= 500 && n < 900 && n.length == 3) {
    
    return fiveHun + hundred.repeat(n[0]-5) ;
  }

  if(n >= 1000 && n < 4000 && n.length == 4) {
    
    return thousand.repeat(n[0]) ;
  } 
}
function convertToRoman(num) {
 let exp = [];
//  let converter = appender();
 let zero = '0'
 let str = num.toString().split("");
 for(let i = 0; i < str.length; i++ ) {
   exp.push(str[i] + zero.repeat(str.length - i-1) )
 }
  for(let j = 0; j < exp.length; j++) {
    result= result.concat(appender(exp[j]))
  }
  return `"${result}"`;
}

console.log(convertToRoman(2));


// freecodecamp solutions

var convertToRoman = function(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
    var romanized = "";
  
    for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
  
    return romanized;
  };
  
  // test here
  convertToRoman(36);

  // second hint

  function convertToRoman(num) {
    var romans = ["I", "V", "X", "L", "C", "D", "M"],
      ints = [],
      romanNumber = [],
      numeral = "",
      i;
    while (num) {
      ints.push(num % 10);
      num = Math.floor(num / 10);
    }
    for (i = 0; i < ints.length; i++) {
      units(ints[i]);
    }
    function units() {
      numeral = romans[i * 2];
      switch (ints[i]) {
        case 1:
          romanNumber.push(numeral);
          break;
        case 2:
          romanNumber.push(numeral.concat(numeral));
          break;
        case 3:
          romanNumber.push(numeral.concat(numeral).concat(numeral));
          break;
        case 4:
          romanNumber.push(numeral.concat(romans[i * 2 + 1]));
          break;
        case 5:
          romanNumber.push(romans[i * 2 + 1]);
          break;
        case 6:
          romanNumber.push(romans[i * 2 + 1].concat(numeral));
          break;
        case 7:
          romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
          break;
        case 8:
          romanNumber.push(
            romans[i * 2 + 1]
              .concat(numeral)
              .concat(numeral)
              .concat(numeral)
          );
          break;
        case 9:
          romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
      }
    }
    return romanNumber
      .reverse()
      .join("")
      .toString();
  }
  
  // test here
  convertToRoman(97);

  // third solution

  function convertToRoman(num) {
    var romans = [
        // 10^i 10^i*5
        ["I", "V"], // 10^0
        ["X", "L"], // 10^1
        ["C", "D"], // 10^2
        ["M"] // 10^3
      ],
      digits = num
        .toString()
        .split("")
        .reverse()
        .map(function(item, index) {
          return parseInt(item);
        }),
      numeral = "";
  
    // Loop through each digit, starting with the ones place
    for (var i = 0; i < digits.length; i++) {
      // Make a Roman numeral that ignores 5-multiples and shortening rules
      numeral = romans[i][0].repeat(digits[i]) + numeral;
      // Check for a Roman numeral 5-multiple version
      if (romans[i][1]) {
        numeral = numeral
          // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
          .replace(romans[i][0].repeat(5), romans[i][1])
          // Shorten occurrences of 9 * 10^i
          .replace(
            romans[i][1] + romans[i][0].repeat(4),
            romans[i][0] + romans[i + 1][0]
          )
          // Shorten occurrences of 4 * 10^i
          .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
      }
    }
  
    return numeral;
  }
  
  // test here
  convertToRoman(36);