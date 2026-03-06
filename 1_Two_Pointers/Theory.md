# Two-Pointers Pattern - Theory

## 1. Definition
The **Two-Pointers pattern** is a technique where **two pointers** are used to traverse an array, string, or linked list efficiently.  
- Pointers can start at **opposite ends** or move in the **same direction**.  
- Reduces time complexity from **O(n²) → O(n)** in many problems.  

---

## 2. When to Use
- Array or string is **sorted** or can be sorted.  
- Finding **pairs or triplets** with a target sum.  
- Checking **palindromes**.  
- **Merging** or partitioning arrays.  
- **Reversing** arrays or strings.  

---

## 3. Types of Two-Pointers

| Type | Description | Example Problems |
|------|------------|----------------|
| Opposite Ends | Pointers start at left & right | Two Sum II, Container With Most Water |
| Same Direction | Both pointers move forward | Merge sorted arrays, Remove duplicates |
| Fast & Slow | One pointer moves faster | Detect cycle in linked list, Find middle element |

---

## 4. Basic Syntax (Opposite Ends)
```javascript
let left = 0;
let right = arr.length - 1;

while(left < right) {
    // your logic here
    if(condition) left++;
    else right--;
}
