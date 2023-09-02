function* naturalNumber() {
  let num = 1;
  while (true) {
    yield num;
    num += 1;
  }
}

const numbers = naturalNumber();
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);