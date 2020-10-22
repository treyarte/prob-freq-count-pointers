// add whatever parameters you deem necessary
/**
 * write a function that separate the positive and negative integers in an array
 * the positive integers should be on the left and the negative should be on the right
 * the order doesnt matter
 * edge case
 * constraints: O(n)
 * 
 *  1. create a left and right
 *  2. loop over array
 *  3. check if left value is positive and if right value is positive
 *  4. if left value is negative and right value is positive swap
 *  5. decrement right value
 *  6. otherwise increment left value
 *  7 return array
 */
function separatePositive(arr) {
    function swap(arr, a, b) {
        const temp = arr[a];
        arr[a] = arr[b]
        arr[b] = temp
    }

    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if(Math.sign(arr[left]) === -1 && Math.sign(arr[right]) === 1 ){
            swap(arr, left, right);
            right--;
            
        } else if (Math.sign(arr[left]) === -1 && Math.sign(arr[right]) === -1) {
            right --;
        } else {
            left++
        }
    }

    
    return arr;
}

module.exports = separatePositive