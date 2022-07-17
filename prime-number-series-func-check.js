let Isprime = function (i) {
  isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
    }
  }
  return isPrime;
};

let n = 20;

for (let i = 2; i < n; i++) {
  let isPrime = Isprime(i);
  if (isPrime == true) {
    console.log(i);
  }
}
