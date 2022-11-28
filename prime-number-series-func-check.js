/*
    Secara garis besar, bilangan prima adalah bilangan yang hanya memiliki dua faktor, 
    yaitu bilangan 1 dan bilangan itu sendiri.

    Dengan kata lain, bilangan ini hanya bisa habis dibagi oleh angka 1 
    dan dirinya sendiri serta tidak bisa dibagi oleh bilangan lainnya.

    Agar lebih paham, kita bisa lihat bahwa angka 2 akan habis dibagi oleh angka 1 dan dirinya sendiri, yaitu 2, 
    sedangkan angka 2 tidak bisa dibagi oleh angka atau bilangan lainnya.

    Contoh lainnya adalah angka 3 yang hanya akan habis jika dibagi dengan angka 1 dan dirinya sendirinya.

    Jadi, kesimpulannya, jika kamu ingin mengetahui bilangan apa saja yang termasuk ke dalam bil prima, 
    maka kamu bisa mencoba dengan membagi bilangan tersebut, apakah hanya bisa memiliki dua faktor pembagi atau lebih.

*/

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
