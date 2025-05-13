/**
 * Sorts an array using the selection sort algorithm.
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function selectionSort(arr) {
/**
 * Sorts an array using the selection sort algorithm.
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function selectionSort(arr) {
  
  const result = [...arr];
  // Edge case: empty array or single element
  if (result.length <= 1) {
    return result;
  }
  
  // Main selection sort algorithm
  for (let i = 0; i < result.length; i++) {
    // Assume the current index has the minimum value
    let minIndex = i;
    
    // Find the minimum value in the unsorted portion of the array
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        // Update the minimum index if a smaller value is found
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the first element of unsorted portion
    // Only if we found a new minimum (avoid unnecessary swaps)
    if (minIndex !== i) {
      // Swap using destructuring assignment
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  
  return result;
}

module.exports = selectionSort;
    const result = [...arr];
    
    // Edge case: empty array or single element
    if (result.length <= 1) {
      return result;
    }
    
    // Main selection sort algorithm
    for (let i = 0; i < result.length; i++) {
      // Assume the current index has the minimum value
      let minIndex = i;
      
      // Find the minimum value in the unsorted portion of the array
      for (let j = i + 1; j < result.length; j++) {
        if (result[j] < result[minIndex]) {
          // Update the minimum index if a smaller value is found
          minIndex = j;
        }
      }
      
      // Swap the found minimum element with the first element of unsorted portion
      // Only if we found a new minimum (avoid unnecessary swaps)
      if (minIndex !== i) {
        // Swap using destructuring assignment
        [result[i], result[minIndex]] = [result[minIndex], result[i]];
      }
    }
    
    return result;
  }
  
  module.exports = selectionSort;