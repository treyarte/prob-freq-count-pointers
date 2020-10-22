// add whatever parameters you deem necessary
//given an array and a sum find the amount of pairs in the array that are equal to the sum
/**
 * 1. sort the array
 * 2. create left and right
 * 3. find sum
 * 4. if sum is too big decrease right
 * 5. else increase left
 * 6. if found equal sum increment count
 * 
 */
function countPairs(arr, sum) {
    const sortedArr = mergeSort(arr)
    
    let left = 0;
    let right = sortedArr.length -1;
    
    let count = 0;

    while(left < right){
        calculatedSum = sortedArr[left] + sortedArr[right]
        if(calculatedSum === sum){
            left++;
            count++;
            right--;
        } else if (calculatedSum < sum){
            left++
        } else {
            right--;
        }
    }

    return count
}

function mergeSort(arr){
    if(arr.length <= 1) return arr

    const middle = Math.floor((arr.length)/2)
    
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle))

    return merge(left, right)

}

function merge(arr1, arr2){
    const results = [];
    let a = 0
    let b = 0;

    while(a < arr1.length && b < arr2.length){
        if(arr1[a] <= arr2[b]){
            results.push(arr1[a])
            a++
        } else {
            results.push(arr2[b])
            b++
        }
    }

    while(a < arr1.length){
        results.push(arr1[a])
        a++
    }

    while(b < arr2.length){
        results.push(arr2[b])
        b++
    }

    return results
}


module.exports = countPairs