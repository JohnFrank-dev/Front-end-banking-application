function sum(a, b) {
  return a + b;
}

test("Hello world!", () => {
  expect(sum(1, 2)).toBe(3);
});
