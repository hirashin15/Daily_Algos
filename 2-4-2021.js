// 3. Longest Substring Without Repeating Characters
// Medium


// Share
// Given a string s, find the length of the longest substring without repeating characters.


// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s == "") {
    return 0;
  }
  let currentCount = 0;
  let currentLetter;
  let max = 1;
  let array = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (s[j] === " ") {
        currentLetter = "empty";
      } else currentLetter = s[j]
      if (array.includes(currentLetter)) {
        array.splice(0, array.length);
        if (currentCount > max) {
          max = currentCount;
        }
        currentCount = 0;
        break;
      } else {
        array.push(currentLetter);
        currentCount++;
      }
    }
  }
  return max;
};

// console.log(lengthOfLongestSubstring(" "));
// // should return 1
// console.log(lengthOfLongestSubstring(""));
// console.log(lengthOfLongestSubstring("c"));
// console.log(lengthOfLongestSubstring("jbpnbwwd"));


// The online, better solution:
var lengthOfLongestSubstring2 = function (s) {
  var start = 0, maxLen = 0;
  var map = new Map();

  for (var i = 0; i < s.length; i++) {
    var ch = s[i];

    if (map.get(ch) >= start) start = map.get(ch) + 1;
    console.log("Map.get: " + map.get(ch) + " New start: " + start)
    map.set(ch, i);
    console.log(`[Letter, index]: [${ch}, ${i}], and start is still: ${start}`)

    if (i - start + 1 > maxLen) maxLen = i - start + 1;
    // can also do this...
    // maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring2("jbpnbwwd"));