const random = require('random');
const { create, all } = require('mathjs');
const { mint } = require('./mint.js');


var rand= random.float((min = 0), (max = 1))

var num= 1
var completeNum = num+ rand

var hash= 'asqsasas6a6s6as6a6s6//a77ws3wrw:a34343sasasas'

var hashray = []


//returns the decryption key for the original content address 
function key (uri){
    var uri = String(uri)
    var arrayHash= uri
    var arrayLength= arrayHash.length
    var instructions =[]
    for (var i = 0; i < arrayLength; i++) {
        const nums=[0,1,2,3,4,5,6,7,8,9]
        if(arrayHash[i]in nums){
            hashray.push(arrayHash[i])
            instructions.push('n')
        }else{
            var num= arrayHash.charCodeAt(i) 
            hashray.push(num) 
            var strNum= String(num)
            var array = strNum.split("")
            var len = array.length
            arrayHash[i].replace(arrayHash[i], num)
            instructions.push(String(len)) 
        }
    }
    console.log(instructions)
    var instrustions = instructions.join("")
    var secret_key=instructions.join("")
    return secret_key
}

console.log(key('asaslakswnfiwnf22929dwdadada'))


const config = {
    number: 'BigNumber',
  
    // Number of significant digits for BigNumbers
    precision: 85
  }
  const math = create(all, config)

  var hashraylen= hashray.length
  var preOppRay = []

function encrypt(){
    for (var i = 0; i < hashraylen; i++){
        var num = Number(hashray[i])
        preOppRay.push(num)
    }
    
    console.log(preOppRay)
    
    
    function print (value) {
        console.log(math.format(value))
      }
    
    var preHash= preOppRay.join("")

    var prehash= preHash*rand
    //upload rand to database 
    var prehash= String(preHash)
    var prehash= preHash+"n"
    return prehash
}


function decrypt (key, num, encrypted){
    var position= 0
    encrypted=encrypted.split('')
    encrypted= encrypted.remove(encrypted[encrypted.length])
    encrypted= Number(encrypted)
    encrypted= encrypted/num
    encrypted= String(encrypted)
    var encrypted=encrypted+'e'
    for(var i =0; i<key.length; i++){
        var itemNumber= key[i]
        var finalHash = []
        if (key[i]=='n'){
            finalHash.push(encrypted(i))
            position=position+1
        }
        else if(key[i]== 'e'){
            break
        }
       else{
            for(var p=position; p<itemNumber; p++){
                var arr=[]
                arr.push(encrypted[p])
                position=position+itemNumber
                arr=arr.join('')
                var prehash= arr[0]
                var orginalStringVal= String.fromCharCode(prehash)
                arr.push(finalHash)
                position= position+itemNumber
            }
        finalHash=finalhHash.join('')
        return finalHash
    }
}
var key ='0123456789'





module.exports = { encrypt, key };


//print(math.bignumber(prehash))





//var ogChar = String.fromCharCode(num)


//DONE:
//

//TO-DO:

