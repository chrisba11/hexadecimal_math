'use-strict';

var hexArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

var userArray = [];

var colorOne = '#2348dd';
var colorTwo = '#23efa4';
var increment = 20;


function convertToDecimal(hexcode) {
  var one   = hexcode.charAt(1);
  var two   = hexcode.charAt(2);
  var three = hexcode.charAt(3);
  var four  = hexcode.charAt(4);
  var five  = hexcode.charAt(5);
  var six   = hexcode.charAt(6);

  var firstDec  = hexArray.indexOf(one);
  var secondDec = hexArray.indexOf(two);
  var thirdDec  = hexArray.indexOf(three);
  var fourthDec = hexArray.indexOf(four);
  var fifthDec  = hexArray.indexOf(five);
  var sixthDec  = hexArray.indexOf(six);

  var firstHex  = firstDec  * 16 * 16 * 16 * 16 * 16;
  var secondHex = secondDec * 16 * 16 * 16 * 16;
  var thirdHex  = thirdDec  * 16 * 16 * 16;
  var fourthHex = fourthDec * 16 * 16;
  var fifthHex  = fifthDec  * 16;
  var sixthHex  = sixthDec  * 1;

  var total = firstHex + secondHex + thirdHex + fourthHex + fifthHex + sixthHex;
  return total;
}

convertToDecimal('#deff5f');



function convertToHex(decimal) {
  var resultOne      = Math.floor(decimal / 16);
  var remainderOne   = decimal % 16;
  var resultTwo      = Math.floor(resultOne / 16);
  var remainderTwo   = resultOne % 16;
  var resultThree    = Math.floor(resultTwo / 16);
  var remainderThree = resultTwo % 16;
  var resultFour     = Math.floor(resultThree / 16);
  var remainderFour  = resultThree % 16;
  var resultFive     = Math.floor(resultFour / 16);
  var remainderFive  = resultFour % 16;
  var remainderSix   = resultFive % 16;

  var one   = hexArray[remainderSix];
  var two   = hexArray[remainderFive];
  var three = hexArray[remainderFour];
  var four  = hexArray[remainderThree];
  var five  = hexArray[remainderTwo];
  var six   = hexArray[remainderOne];

  return `#${one}${two}${three}${four}${five}${six}`;
}

convertToHex(14614367);


// function to take in beginning and ending hex values and calculate the difference between the two
function spacing() {
  var number1 = convertToDecimal(colorOne);
  var number2 = convertToDecimal(colorTwo);
  var difference = Math.abs(number1 - number2);
  var result = difference / increment;
  var floored = Math.floor(result);
  console.log('This is the spacing:', floored);
  return floored;
}

spacing();

// generate array of hex values - DOES NOT FUNCTION PROPERLY
function generateUserArray() {
  userArray.push(colorOne);

  // var nextHex = colorOne;
  // console.log('This is the nextHex:', nextHex);

  var decimalNum = convertToDecimal(colorOne);
  console.log('This is the decimalNum before increment:', decimalNum);

  for (var i = 2; i < increment; i++) {
    decimalNum += spacing();
    var shifted = Math.floor( decimalNum / 256);
    console.log('This is the decimalNum after increment:', shifted);

    var hexNum = convertToHex(shifted);
    console.log('This is the hexNum being pushed to array:', hexNum);
    userArray.push(hexNum);
  }
  userArray.push(colorTwo);
}

generateUserArray();

