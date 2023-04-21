function letterCombinations(input_digit) {
  //Complete the function


	
  if (input_digit.length < 2) {
    return [input_digit];
  } else {
      var allAnswers = [];
      for (var i = 0; i < input_digit.length; i++) {
        var letter = input_digit[i];
        var shorterWord = input_digit.substr(0, i) + input_digit.substr(i + 1, input_digit.length - 1);
        var shortwordArray = allAnagrams(shorterWord);
        for (var j = 0; j < shortwordArray.length; j++) {
          allAnswers.push(letter + shortwordArray[j]);
        }
      }
      return allAnswers;
  }


letterCombinations("")
}

module.exports = letterCombinations;
