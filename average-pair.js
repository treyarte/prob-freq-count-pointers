// add whatever parameters you deem necessary
/**
 given an array of integers and a target average determine if there is a pair that equals 
 the target average. There can be multiple pairs
    edge case: if the array is empty then it is false
    constraints: O(n), can include negative values, 
    
    0. create average function

    1. check if array is empty
    2. return false if empty
    3. create a left and right variables that hole left and right array positions
    4. loop through and calculate average
    5. check average against target average
    6. if average is equal to target return true
    6b. if average is less than target increase left
    6c. if average is greater than target decrease right
    7. return false if loop finish

*/

function averagePair(arr, targetAvg) {
    if(arr.length === 0) return false;

    let left = 0;
    let right = arr.length-1;

    while(left < right){
        let currentAvg = average(arr[left], arr[right])

        if(currentAvg === targetAvg) return true;

        if(currentAvg < targetAvg){
            left++
        } else {
            right--
        }
    }

    return false
}

function average(a, b){
    return (a + b)/2
}

module.exports = averagePair