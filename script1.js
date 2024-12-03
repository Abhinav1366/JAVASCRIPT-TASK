// IF THE GIVEN STRING IS PALINDROME OR NOT

function isPalindrome(str){
    let lowercasestring = str.toLowerCase();
    let stringToArray = lowercasestring.split('');
    let reversedArray = stringToArray.reverse( ).join('')
    if(lowercasestring === reversedArray){
        console.log('The given is a palindrome')
    }else{
        console.log('The given string is not a palindrome')
    }
}

isPalindrome('MADAM');

