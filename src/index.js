module.exports = function toReadable (number) {

  const digits = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion'
  };

  let combinedNumber = '';

  if( number < 21 ) {

    combinedNumber = digits[number];

  } else if(( number >= 21) && ( number < 100 )){
      combinedNumber = digits[number - (number % 10)];
      if (!(number % 10)) {
        return combinedNumber;
      }
      else {
        combinedNumber += ' ' + digits[number % 10];
      }
  } else if (( number >= 100 ) && ( number < 1000 )) {
      combinedNumber = digits[Math.floor(number / 100)];
      if (!(number % 100))
      {
        return  combinedNumber += ' ' + digits[100];
      } else{
        if(!(number % 10)){
          combinedNumber += ' ' + digits[100] + ' ' + digits[(number % 100) - (number % 10)];
        } else if((number % 100) < 21) {
          combinedNumber += ' ' + digits[100] + ' ' + digits[(number % 100)];
        } else {
          combinedNumber += ' ' + digits[100] + ' ' + digits[(number % 100) - (number % 10)] + ' ' + digits[number % 10];
        }
      }
  }
  return combinedNumber;
}
