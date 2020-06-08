describe("fizzBuzz", function() {
  it("should return 1", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });
  it("should return 2", function() {
    expect(fizzBuzz(2)).toEqual(2);
  });
  it("should return 'fizz'", function() {
    expect(fizzBuzz(3)).toEqual('fizz');
  });
  it("should return 'fizz'", function() {
    expect(fizzBuzz(6)).toEqual('fizz');
  });
  it("should return 'buzz'", function() {
    expect(fizzBuzz(5)).toEqual('buzz');
  });
  it("should return 'fizzbuzz'", function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });
});
