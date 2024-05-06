// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
  let reversed = "";

  for (let i = str.length -1; i >= 0; i--) {
    reversed += str[i];
  }

  return  str === reversed;
}


console.log(palindrome1("apa"));

function palindrome2(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');

  return str === reversed;
}

console.log(palindrome2("apa"));


function palindrome3(str) {
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1];
    });
  }


  console.log(palindrome3("apa"));