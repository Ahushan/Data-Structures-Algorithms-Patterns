function TwoPointersExmaple(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let Sum = 0;

    while(left < right){
        Sum = arr[left] + arr[right];

        if (Sum === target) return [left, right];
        if (Sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1]
}

const arr = [1, 3, 4, 5, 7, 10];
const target = 9;

console.log(TwoPointersExmaple(arr,target));