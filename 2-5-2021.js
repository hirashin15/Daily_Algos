/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length;
  const half = length / 2;
  console.log(`The half way mark is: ${half}`)
  console.log(`Nums1: ${nums1} and Nums2: ${nums2}`)

  let singleArray = [];
  // Test to see if its a single array
  nums1.length === 0 ? singleArray = nums2 : singleArray = nums1;

  // Otherwise, create single array
  if (singleArray.length === 0) {
    let p1, p2 = 0;
    let i = 0;
    while (i < half + 2) {
      if (nums1[p1] < nums2[p2]) {
        singleArray.push[nums1[p1]]
        p1++;
      } else {
        singleArray.push[nums2[p2]];
        p2++;
      }
      i++;
    }
  }

  console.log(`Single array is: ${singleArray}`)

  if (singleArray !== undefined) {
    console.log("I have entered. Single array has been assigned")
    if (length % 2 == 0) {
      let total = singleArray[Math.floor(half)] + singleArray[Math.ceil(half)];
      return total / 2;
    } else {
      return singleArray[Math.floor(half)]
    }
  }

  return "Hello!"
};

console.log(findMedianSortedArrays([], [1]))
console.log(findMedianSortedArrays([2], []))
console.log(findMedianSortedArrays([1, 2], [3, 4]))