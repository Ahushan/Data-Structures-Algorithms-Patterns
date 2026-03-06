function TwoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let Sum = 0;

    while(left < right) {
        Sum = arr[left] + arr[right];
        if(Sum === target) return [left, right];
        Sum < target ? left++ : right--;
    }
    return [-1, -1]
}

let arr = [2,7,11,15];
let target = 9;

console.log(TwoSum(arr, target));