//This documentation uses firebase. This may not be the storage solution of choice, so, with that in mind, I will 
//provide comments at the location that refer to firebase specifically for customization purposes.
const ipfs =require('ipfs');
const { uploadData_private, uploadData_public } = require('./upload.js');
const { encrypt } = require('./ipfs.js');
const { NFTStorage, File } =require('nft.storage');
const imageToUri = require('image-to-uri');


//retreive data from storage provider

var time= "" //timestamp
var imgHash="" //id of image
var hash="" //id of item
var key="" //private key



//ID hash object upload to ipfs
//async function cid(content){
//   const cid = await ipfs.add({ content }, {
//        cidVersion: 1,
//        hashAlg: 'sha2-256'
//      })
//}
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJkZTM2MThEN0YwOTc2NWZBYzcyNzlEMzQzOTQwNUM0NWQxMzc4OTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyMzYxMjM0MTEwMSwibmFtZSI6Im9mZkNoYWluIn0.690wvdvlWRWPDDSMJ_bhKus1vf5eheGue7UrA5z0ly8'
const client = new NFTStorage({ token: apiKey })

async function async_ipfsStorage(path, name, ethAddress){
    try{
        var imgHash=imageToUri(path)
        var encryptedIMG=encrypt(imgHash)
        var nameHash= encrypt(name)
        var time=Date.now()
        var hashArray = new Array()
        hashArray.push(encryptedIMG)
        hashArray.push(nameHash)
        hashArray.push(time)
        uniqID= hashArray.join('')

        var metadata = await client.store({
            cid: encrypt(imageToUri(path)),
            name: itemName,
            uniqueID: uniqID,
            time: time,
            //image: new File([/* data */], path, { type: 'image/jpg' })
        })
    }
    catch (err) {
        console.log(err);
    }
      return metadata.url;
}
async function offMintPlus(path, name, ethAddress){
    var time=Date.now()
    (async () => {
        const imghash= await imageToUri(path)
        const cidhash= await encrypt(imghash)
        const nameHash= await encrypt(name)
        const timehash =await encrypt(time)

    })
    var hashArray = new Array()
    hashArray.push(encryptedIMG)
    hashArray.push(nameHash)
    hashArray.push(time)
    hashArray.join('')
    var metadata = await client.store({
        cid: cidhash,
        name: name,
        uniqueID: hashArray,
        time: time,
        creator: ethAddress,
        //image: new File([/* data */], path, { type: 'image/jpg'})
    })
    return(metadata.url);
    console.log(metadata.url)
}

var time= Date.now()

async function offMintReg( name, ethAddress){
    var cidhash= await encrypt(imghash)
    var nameHash= await encrypt(name)
    var timehash =await encrypt(time)
    var imghash= await imageToUri(path)

    var metadata =await client.store({
        cid: encrypt(imghash),
        name: name,
        time: time,
        creator: ethAddress,
        //image: new File([/* data */], 'pinpie.jpg', { type: 'image/jpg'})
    })
    return(metadata.url);
    console.log(metadata.url)
}(async () => {
    //const hash= await offMint('/Users/jackmcdonald/Documents/twitterExtract/IMG_0047_output.jpeg', 'test', '1swewnnekw')  
    const hash= await offMintReg('test', '1swewnnekw')  
    console.log(hash)
})()










//var hash=ipfsStorage().then(result => {
 //   hash=result
//})



// ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json



//next steps:

//1. import content object hashes
//2. upload function changing description titles -eth address
//3. ipfs hash storage system 
//4. 