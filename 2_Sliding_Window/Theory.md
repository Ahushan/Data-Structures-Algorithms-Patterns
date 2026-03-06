# Sliding Window Pattern - Theory

## 1. Definition
The **Sliding Window pattern** is a technique used to solve problems involving **subarrays or substrings** efficiently.  
- Instead of using nested loops (O(n²)), we use a **window (range of indices)** that "slides" through the array or string.  
- Reduces time complexity from **O(n²) → O(n)** in many problems.

---

## 2. When to Use
- Finding **subarrays or substrings** with certain properties (sum, length, distinct characters).  
- **Maximum or minimum sum/length** problems.  
- Problems with **consecutive elements**.  

---

## 3. Types of Sliding Window

| Type | Description | Example Problems |
|------|------------|----------------|
| Fixed-size window | Window size is constant | Maximum sum of size k |
| Variable-size window | Window expands/contracts based on condition | Longest substring with K distinct characters, Subarray sum ≤ target |

---

## 4. Basic Syntax (Fixed-Size Window)
```javascript
const arr = [1,2,3,4,5];
const k = 3; // window size
let windowSum = 0;

// Initialize first window
for(let i = 0; i < k; i++){
    windowSum += arr[i];
}

let maxSum = windowSum;

// Slide the window
for(let i = k; i < arr.length; i++){
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
}

console.log(maxSum);
