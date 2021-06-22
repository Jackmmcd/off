var ipfs=require('./ipfs.js');
const imageToUri = require('image-to-uri');

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


function get_hash_metadata_private(itemName, path, privateKey){
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
    path,
    nameHash, 
    time,
    fullHash
  }  
}

function get_hash_metadata_public(itemName, path){
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
    path,
    nameHash, 
    time,
    fullHash
  }  
}

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

  module.exports = { get_hash_metadata_public, get_hash_metadata_private };