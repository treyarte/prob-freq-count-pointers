// add whatever parameters you deem necessary
/**
 * Write a function where given two positive integers return if they have the same number frequency or not
 * 
 */
function sameFrequency(num1, num2) {
    const num1String = num1.toString()
    const num2String = num2.toString()
    
    if(num1String.length !== num2String.length) return false;

    function createObject(str){
        const newMap = new Map();

        for(let s of str){
    
            if(newMap.has(s)){
                newMap.set(s, newMap.get(s) + 1)
            } else {
                newMap.set(s, 1)
            }
        }

        return newMap
    }
    
    
    const num1Obj = createObject(num1String);

    for(let n of num2String){
        if(!num1Obj.has(n)){
            return false
        }
    }


    return true
}

module.exports = sameFrequency
