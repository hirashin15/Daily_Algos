// 5. Longest Palindromic Substring
// Medium

// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let currentP = s[0];
  for (let ipivot = 0; ipivot < s.length; ipivot++) {
    //for single letters
    if (currentP.length <= 1 && currentP > s[ipivot]) {
      currentP = s[ipivot];
    }

    let istart = ipivot - 1, iend = ipivot + 1;
    //for odd palindrome
    while (s[istart] == s[iend] && s[istart] !== undefined && s[iend] !== undefined) {
      if (iend - istart > currentP.length - 1) {
        currentP = s.substring(istart, iend + 1);
      }
      istart--, iend++;
    }
    //for even palindrome
    let istart2 = ipivot - 1, iend2 = ipivot;
    while (s[istart2] == s[iend2] && s[istart2] !== undefined && s[iend2] !== undefined) {
      if (iend2 - istart2 > currentP.length - 1) {
        currentP = s.substring(istart2, iend2 + 1);
      }
      istart2--, iend2++;
    }
  }
  return currentP;
};

console.log(longestPalindrome('cbbcracecar'))
// console.log(longestPalindrome('ac'))
// console.log(longestPalindrome('ca'))
// console.log(longestPalindrome('aaaaaa'));