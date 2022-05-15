function isPalindrome(word) {
  // Write your algorithm here
  let breakUpString = word.split('');
  let reverseOrder = breakUpString.reverse();
  let joinBackTogether = reverseOrder.join('')
  if (joinBackTogether === word){
    return true;
  } if (joinBackTogether !== word){
    return false;
  }
}

// console.log(isPalindrome('abby'))

/* 
  Add your pseudocode here
  -first break up the string
  -reverse the order of the string
  -join the string back together
*/

/*
  Add written explanation of your solution here
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
