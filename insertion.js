/**
 * Sorts an array using the insertion sort algorithm.
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function insertionSort(arr) {
    const result = [...arr];
    
    // Edge case: empty array or single element
    if (result.length <= 1) {
      return result;
    }
    
    // Start from the second element (index 1)
    for (let i = 1; i < result.length; i++) {
      // Store the current value to insert
      const currentVal = result[i];
      
      // Start comparing with the previous elements
      let j = i - 1;
      
      // Move elements greater than currentVal one position ahead
      // This creates the space to insert the current element
      while (j >= 0 && result[j] > currentVal) {
        result[j + 1] = result[j]; // Shift element forward
        j--;
      }
      
      // Place the current value in the correct position
      // (j+1 because the while loop decremented j one extra time)
      result[j + 1] = currentVal;
    }
    
    return result;
  }
  
  module.exports = insertionSort;