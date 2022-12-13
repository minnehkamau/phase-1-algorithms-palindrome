
function myString(palindrome){{
  const palindromeWords = palindrome.split("");
  //reversing the array
  const reversedPalindromeWords = palindromeWords.reverse();
  //making a string from the reversed array
const reversedPalindrome=reversedPalindromeWords.join("")
//returning the string that you have made
return reversedPalindrome;
}

}
  
function isPalindrome(palindrome){
  const reversedPalindrome = myString(palindrome);
  //checking if the reversed string is the same as the input and return whether it is true or not
  if(palindrome ===reversedPalindrome){
    return true;
  }else{
    return false;
  }
}
/*
create a function that we will use to reverse our input
convert the input into a string
It should return the reversed word as a string
create another function that allows us to check our string
it should check whether the string is the same as the previous input
return true if the string is palindrome and false if not

*/

/*
  Add written explanation of your solution here
The solution derived from this code should tell us whether a word is a palindrome or not. This is through 
reversing the input and making it a string and then compare it with the output.




*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
