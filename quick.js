/**
 * Finds the pivot index for the quickSort algorithm.
 * Rearranges elements so that all elements smaller than the pivot are to the left,
 * and all elements greater than the pivot are to the right.
 * 
 * @param {Array} arr - The array to be partitioned
 * @param {Number} start - The starting index (default: 0)
 * @param {Number} end - The ending index (default: arr.length - 1)
 * @returns {Number} - The final pivot index
 */
function pivot(arr, start = 0, end = arr.length - 1) {
    // Choose the first element as the pivot
    const pivot = arr[start];
    
    // Track the pivot's final position
    let pivotIndex = start;
    
    // Loop through the array (excluding the pivot)
    for (let i = start + 1; i <= end; i++) {
      // If the current element is less than the pivot
      if (arr[i] < pivot) {
        // Increment the pivot index
        pivotIndex++;
        
        // Swap the current element with the element at the pivot index
        [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
      }
    }
    
    // Swap the pivot element with the element at the pivot index
    // This places the pivot in its correct sorted position
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    
    // Return the pivot's final index
    return pivotIndex;
  }
  
  /**
   * Sorts an array using the quickSort algorithm.
   * 
   * @param {Array} arr - The array to be sorted
   * @param {Number} left - The starting index (default: 0)
   * @param {Number} right - The ending index (default: arr.length - 1)
   * @returns {Array} - The sorted array
   */
  function quickSort(arr, left = 0, right = arr.length - 1) {
    // Make a copy of the array if this is the initial call
    if (left === 0 && right === arr.length - 1) {
      arr = [...arr];
    }
    
    // Base case: arrays with 0 or 1 element are already sorted
    if (left < right) {
      // Find the pivot index
      let pivotIndex = pivot(arr, left, right);
      
      // Recursively sort elements to the left of the pivot
      quickSort(arr, left, pivotIndex - 1);
      
      // Recursively sort elements to the right of the pivot
      quickSort(arr, pivotIndex + 1, right);
    }
    
    // Return the sorted array
    return arr;
  }
  
  module.exports = quickSort;