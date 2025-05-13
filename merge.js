/**
 * Merges two sorted arrays into a single sorted array.
 * @param {Array} arr1 - First sorted array
 * @param {Array} arr2 - Second sorted array
 * @returns {Array} - Merged sorted array
 */
function merge(arr1, arr2) {
    // Create an empty result array
    const results = [];
    
    // Create pointers for both arrays
    let i = 0;
    let j = 0;
    
    // Compare elements from both arrays and push the smaller one into results
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    
    // Add any remaining elements from arr1
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    
    // Add any remaining elements from arr2
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    
    return results;
  }
  
  /**
   * Sorts an array using the merge sort algorithm.
   * @param {Array} arr - The array to be sorted
   * @returns {Array} - The sorted array
   */
  function mergeSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
      return arr;
    }
    
    // Split the array into halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    // Merge the sorted halves
    return merge(left, right);
  }
  
  module.exports = { merge, mergeSort };