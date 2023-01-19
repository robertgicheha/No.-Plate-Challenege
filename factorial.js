function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      let numbers = [];
      for (let i = 1; i <= n; i++) {
        numbers.push(i);
      }
      let result = 1;
      for (let number of numbers) {
        result *= number;
      }
      return result;
    }
  }

console.log(factorial(5));