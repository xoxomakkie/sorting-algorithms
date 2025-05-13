# Sorting Algorithms

This repository contains implementations of common sorting algorithms in JavaScript.

## Algorithms Implemented

- **Bubble Sort**: A simple comparison sort. O(n²) time complexity.
- **Insertion Sort**: Builds the sorted array one item at a time. O(n²) time complexity.
- **Selection Sort**: Divides the input into a sorted and unsorted region. O(n²) time complexity.
- **Merge Sort**: A divide and conquer algorithm. O(n log n) time complexity.
- **Quick Sort**: Another divide and conquer algorithm. Average O(n log n) time complexity.
- **Radix Sort**: A non-comparative sorting algorithm. O(nk) time complexity where k is the number of digits.

## Usage

Each sorting algorithm is implemented in its own file and can be imported and used as follows:

```javascript
const bubbleSort = require('./bubbleSort');
const array = [4, 20, 12, 10, 7, 9];
const sortedArray = bubbleSort(array);
console.log(sortedArray); // [4, 7, 9, 10, 12, 20]
