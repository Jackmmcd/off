//provided is the means of securing transactions. Database/ledger features are still being worked out

off=require('./offChain.js');


function uploadData_public(itemName, path, ethAddress){
    time=off.get_hash_metadata_public( itemName, path).time
    imgHash=off.get_hash_metadata_public( itemName, path).encryptedIMG
    itemHash=off.get_hash_metadata_public( itemName, path).nameHash
    hash=off.get_hash_metadata_public( itemName, path).fullHash

    //database operations
}

function uploadData_private(itemName, path, key, ethAddress){
    time=off.get_hash_metadata_private( itemName, path).time
    imgHash=off.get_hash_metadata_private( itemName, path).encryptedIMG
    itemHash=off.get_hash_metadata_private( itemName, path).nameHash
    hash=off.get_hash_metadata_private( itemName, path).fullHash
    key=off.get_hash_metadata_private( itemName, path).privateHash

    //database operations
}

//reccomended to upload eth addies for ease of use. will move to fiat in a bit

//decentralized fiat transfer

const { NFTStorage, File } = require('nft.storage')

async function upload(){
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJkZTM2MThEN0YwOTc2NWZBYzcyNzlEMzQzOTQwNUM0NWQxMzc4OTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyMzYxMjM0MTEwMSwibmFtZSI6Im9mZkNoYWluIn0.690wvdvlWRWPDDSMJ_bhKus1vf5eheGue7UrA5z0ly8'
    const client = new NFTStorage({ token: apiKey })

    const metadata = await client.store({
        name: 'Pinpie',
        description: 'Pin is not delicious beef!',
        image: new File([/* data */], 'pinpie.jpg', { type: 'image/jpg' })
    })
    return (metadata.url)
}(async () => {
    //const hash= await offMint('/Users/jackmcdonald/Documents/twitterExtract/IMG_0047_output.jpeg', 'test', '1swewnnekw')  
    const hash= await upload()
    console.log(hash)
})()
// ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json

module.exports = { uploadData_private, uploadData_public };
