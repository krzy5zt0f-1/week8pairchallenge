describe("FizzBuzz", function() {
    var fizzbuzz;

    beforeEach(function(){
        fizzbuzz = new fizzbuzz();
    });

    it("should be able to return a numbers if not divisible by 3 or 5", function() {
        expect(fizzbuzz.say(1)).toEqual(1);
    });

});