function FizzBuzz() {
  FizzBuzz.prototype.say = function(number) {
    if(number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else {
      return number;
    }
  };

  FizzBuzz.prototype.hay = function(arrayOfNumbers) {
    return arrayOfNumbers.map(number => {
      return this.say(number);
    });
  }
};
