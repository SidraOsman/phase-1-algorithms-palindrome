function isPalindrome(word){
  // Write your algorithm here
  word = word.toLowerCase();
  for(let i =0; i< word.length/2; i++){
    if (word[i] !== word[word.length -1 -i]){
      return false;
    }
  }
    return true;
}
/*  Add your pseudocode here

if (word[i] !== word[word.length -1-i]){
  return false;
}
return true;

*/

/*
  Add written explanation of your solution here
In this function we iterate through the string known as word using the loop.
 We commpare the characters at the beginning and at the end of the string. 
 If at any point the characters mismatch then we know it is not a palindrome hence return false. 
 However if the characters match then it is a palindrome then it returns true.

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
