function fizzBuzz(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
      const num = i + 1;
      if (num % 3 === 0 && num % 5 === 0) {
          return "FizzBuzz";
      }
      if (num % 5 === 0) {
          return "Buzz";
      }
      if (num % 3 === 0) {
          return "Fizz";
      }
      return num.toString();
  })
};