/**
 * Gets the digit at the given place value for a number.
 * 
 * @param {Number} num - The number to get the digit from
 * @param {Number} place - The place value (0 for ones, 1 for tens, etc.)
 * @returns {Number} - The digit at the specified place
 */
function getDigit(num, place) {
    // Convert to absolute value to handle negative numbers
    num = Math.abs(num);
    // Use integer division and modulo to get the digit
    return Math.floor(num / Math.pow(10, place)) % 10;
  }
  
  /**
   * Counts the number of digits in a number.
   * 
   * @param {Number} num - The number to count digits for
   * @returns {Number} - The number of digits
   */
  function digitCount(num) {
    // Handle edge case of 0
    if (num === 0) return 1;
    
    // Convert to absolute value to handle negative numbers
    num = Math.abs(num);
    
    // Use logarithm to count digits
    return Math.floor(Math.log10(num)) + 1;
  }
  
  /**
   * Finds the number with the most digits in an array.
   * 
   * @param {Array} nums - The array of numbers
   * @returns {Number} - The count of digits in the largest number
   */
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  /**
   * Sorts an array of numbers using the radix sort algorithm.
   * 
   * @param {Array} nums - The array of numbers to sort
   * @returns {Array} - The sorted array
   */
  function radixSort(nums) {
    // Make a copy of the input array
    const result = [...nums];
    
    // Edge case: empty array or single element
    if (result.length <= 1) {
      return result;
    }
    
    // Find the number with the most digits
    const maxDigitCount = mostDigits(result);
    
    // Loop through each place value (ones, tens, hundreds, etc.)
    for (let k = 0; k < maxDigitCount; k++) {
      // Create 10 buckets (for digits 0-9)
      const buckets = Array.from({ length: 10 }, () => []);
      
      // Place each number in the appropriate bucket based on its kth digit
      for (let i = 0; i < result.length; i++) {
        const digit = getDigit(result[i], k);
        buckets[digit].push(result[i]);
      }
      
      // Flatten the buckets back into the array
      result.length = 0; // Clear the array
      result.push(...buckets.flat());
    }
    
    return result;
  }
  
  module.exports = radixSort;