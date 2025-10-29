const { sum } = require("../components/sum");

test("Here we write the description of the test case what, why, how", () => {
  const result = sum(5, 4);
  const result1 = sum(3, 3);
  // We have to use assertion test case in order to test the behaviour and get expected results, because it will run this test case and pass the test case which doesn't make sense for now.
  expect(result).toBe(9);
  expect(result1).toBe(6);
});

test("Sum Calculate input = 6,7 ", () => {
  const result = sum(3, 3);

  expect(result).toBe(6);
});
