
/*
    Reverse atau membalik 
    Misal kita memiliki string caracter
    Mara maka setelah di reverse/balik akan menjadi araM
    contoh : 
    mara = aram
    apa  = apa
    dia  = aid
    makan malam = malam nakam
*/


let  word = 'mara';

function reverse1(str) {
    return str
      .split('')  // Convert string to array of characters
      .reverse()  // Reverse the array elements
      .join('');  // Join the array back into a string
}




/*
    In JavaScript, the split() method is used to divide
    a string into an array of substrings based on a specified delimiter, 
    and returns the new array. 
*/
console.log(word.split(''));

/*
    In JavaScript, to reverse elements, like the characters of a string or the items in an array, 
    you can use different approaches depending on what exactly you're trying to reverse.
*/
console.log(word.split('').reverse(''));

//Call function reverse1
console.log(reverse1(word));


function reverse2(str) {
    
    let result = '';
    let length = str.length;

    for (let i = length -1; i >= 0; i--) {
        result +=str[i];
    }
    return result;
}


//Call function reverse2
console.log(reverse2(word));


function reverse3(str) {
    let reversed = '';
    for (let character of str) {
      reversed = character + reversed;
    }
    return reversed;
}
  

//Call function reverse3
console.log(reverse3(word));
  