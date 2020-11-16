describe("FizzBuzz", function() {
    var fizzbuzz;

    beforeEach(function(){
        fizzbuzz = new FizzBuzz();
    });

    it("should be able to return a numbers if not divisible by 3 or 5", function() {
        expect(fizzbuzz.say(2)).toEqual(2);
    });

    it("should be able to return a `Fizz` if number is  divisible by 3", function() {
        expect(fizzbuzz.say(3)).toEqual("Fizz");
    });

    it("should be able to return a `Buzz` if number is  divisible by 5", function() {
        expect(fizzbuzz.say(5)).toEqual("Buzz");
    });

    it("should be able to return a `FizzBuzz` if number is  divisible by 3 and 5", function() {
        expect(fizzbuzz.say(15)).toEqual("FizzBuzz");
    });

    it("should be able to return a modified array of numbers", function() {
      const testArray = Array.from(Array(15), (_, index) => index + 1);
        expect(fizzbuzz.hay(testArray)).toEqual([ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz' ] );
    });

});
