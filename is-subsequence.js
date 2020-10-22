// add whatever parameters you deem necessary
/**
 * write a function that checks if a word is sub sequence of another
 * the words must be in order
 * 
 *  1. check if the second string is less than the first
 *  2. if 2nd is smaller return false
 *  3. create a counter for both strings
 *  4. loop through str2
 *  5. if the words match increment the first counter
 *  6. if the counter is equal to the str1 length return true
 *  7. return false
 */
function isSubsequence(str1, str2) {

    if(str1.length > str2.length) return false

    let str1Counter = 0;

    for(let i = 0; i < str2.length; i++){
        if(str1[str1Counter] === str2[i]){
            str1Counter++;
        } 

        if(str1Counter >= str1.length) return true;
    }

    return false
}

module.exports = isSubsequence