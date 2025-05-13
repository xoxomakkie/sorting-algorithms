function bubbleSort(arr) {
    // Handle edge case of empty array
    if (arr.length === 0) {
      return arr;
    }
    
  
    const result = [...arr];
    let noSwaps;
    
    // Outer loop - each pass through the array
    for (let i = result.length; i > 0; i--) {
      noSwaps = true;
      
      // Inner loop - comparing adjacent elements
      for (let j = 0; j < i - 1; j++) {
        // If the current element is greater than the next element, swap them
        if (result[j] > result[j + 1]) {
          // Swap elements
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
          // We made a swap, so we need to go through the array again
          noSwaps = false;
        }
      }
      
      // If no swaps were made in this pass, the array is sorted
      if (noSwaps) break;
    }
    
    return result;
  }
  
  module.exports = bubbleSort;