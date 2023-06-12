/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    var str1 = str1.split('')
    var str2 = str2.split('')
    var count = 0
    for(var i = 0 ; i<str1.length;i++){
      for(var j = 0 ;j<str2.length;j++){
        if(str1[i] === str2[j]){
          console.log(count,str2.length,"count")
          count++
        }
      }
    }

    if(count === str2.length && str2.length === str1.length){
      return true
    }
}

var ans = isAnagram('cat', 'act');
if(ans){
  console.log("this is an anagram")
}else{
  console.log("not an anagram")
}

module.exports = isAnagram;
