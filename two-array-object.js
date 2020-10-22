// add whatever parameters you deem necessary
/**
 * write a function that accepts an array of keys and an array of values map the values to keys
 * 
 * notes: 
 *      the lengths can vary
 *      if the array of keys is less than the values ignore the rest of the values, 
 *      if there are more keys than values then fill the keys with null
 * 
 *  1. create a map
 *  2. loop through keys
 *  3. set keys to value
 *  4. check if the index is greater than the second array
 *  5. if greater than then set null
 *  6. return map
 *  
 */

function twoArrayObject(keys, values) {
    const newObj = {};

    for(let i = 0; i < keys.length; i++){
        if(i >= values.length){
            newObj[keys[i]] = null  
        } else {

            newObj[keys[i]] = values[i]
        }
    }

    return newObj
}

module.exports = twoArrayObject