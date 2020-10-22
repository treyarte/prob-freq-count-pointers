// add whatever parameters you deem necessary
/**write a function that accepts a message and a string of words. return true or false whether or not
the message can be created with the string of words.
    input: "aabbc" "bbacaabaca" true
    constraints: o(n+m) no spaces, only lowercase

    1. check length of words. if words is less than msg length then return false
    2. convert msg to object
    3. set key as letter and value as many times it appears
    3. loop through words
    4. check if words is in the msg object
    5. if not in the object return false
    6. if found decrease value
    7. if value is zero delete key
    8. if object is empty or loop ends return true
**/

function constructNote(msg, words) {

    if(msg.length > words.length) return false



    

    function createMsgMap(str){
        const msgMap = new Map()
        for(let item of str){
            if(msgMap.has(item)){
                msgMap.set(item, msgMap.get(item)+ 1)
            } else {
                msgMap.set(item, 1)
            }
        }

        return msgMap
    }

    const msgMap = createMsgMap(msg)

    for(let word of words){
     if(msgMap.size === 0) return true;
       if(msgMap.has(word)){
            msgMap.set(word, msgMap.get(word) - 1)

            if(msgMap.get(word)<= 0){
                msgMap.delete(word)
           }
       } 
    }
    return false
}

module.exports = constructNote