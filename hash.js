const firebase =require("firebase/app");
require("firebase/database");
var ipfs=require('./ipfs.js');
const uri = require('image-data-uri')
const imageToUri = require('image-to-uri');
const { time } = require("console");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


function getInfo(){
  var hashValues= new Array();
  readline.question('Img path: ', (path) => {
     imgHash=imageToUri(path)
     encryptedIMG=ipfs.encrypt(imgHash)
     hashValues.push(encryptedIMG)
     
    readline.question('Item name: ', (name) => {

      nameHash= ipfs.encrypt(name)
      hashValues.push(nameHash)
        readline.question('Enter key: ', (key) => {
          keyHash=ipfs.encrypt(key)  
          hashValues.push(keyHash)
          readline.close();
      });
    });
  });
  console.log(hashValues)
}


function get_hash_metadata(itemName, path, privateKey){
  var hashArray = new Array()
  imgHash=imageToUri(path)
  var encryptedIMG=ipfs.encrypt(imgHash)
  hashArray.push(encryptedIMG)
  var nameHash= ipfs.encrypt(itemName)
  hashArray.push(nameHash)
  var time=Date.now()
  hashArray.push(time)
  fullHash= hashArray.join('')

  return{
    encryptedIMG, 
    privateKey,
    nameHash, 
    time,
    fullHash
  }
  

}
get_hash_metadata('Van Gogh', '/Users/jackmcdonald/Downloads/starry-night-van-gogh.jpg', 'Private key')

function formItemHash(){
  userID=ipfs.encrypt(name)
  hash= IMGhash
  time= ipfs.encrypt(Date.now())
  fullHash= userID+hash+time
  
}

function writeUserData(itemName, itemID) {
    firebase.database().ref().set({
      id: itemName,
      itemID: itemID,

    });
  }
