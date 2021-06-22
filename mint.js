const { NFTStorage, File, Blob } = require('nft.storage');
const { encrypt } = require('./ipfs.js');
const { validate, getAddressInfo } = require('bitcoin-address-validation');



async function mint(itemName, description, img, btcAddress, priceInBTC){
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJkZTM2MThEN0YwOTc2NWZBYzcyNzlEMzQzOTQwNUM0NWQxMzc4OTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyMzYxMjM0MTEwMSwibmFtZSI6Im9mZkNoYWluIn0.690wvdvlWRWPDDSMJ_bhKus1vf5eheGue7UrA5z0ly8'
    const client = new NFTStorage({ token: apiKey })
    var time = Date.now()
    var strTime =time.toString()
    if (validate(btcAddress=true)){
        btcAddress=btcAddress
    } else{
        console.log('It looks like the wallet address you entered is invalid. Please enter a valid BTC address!')
        btcAddress=null
    }
    const metadata = await client.store({
        name: itemName,
        time: time,
        creator_BTC: btcAddress,
        price: priceInBTC,
        ID: await encrypt([itemName,description, strTime, btcAddress, priceInBTC]),
        description: description,
        image: new File([/* data */], img, { type: 'image/png' }),
    })
    return (metadata.url)
}(async () => {
    //const hash= await offMint('/Users/jackmcdonald/Documents/twitterExtract/IMG_0047_output.jpeg', 'test', '1swewnnekw')  
    //const hash= await upload()
    //console.log(hash)
    /*const hash= await mint('test', 'test2', 'abcdef.png', "sdsdsd", "sdsdsd")
    console.log(hash)*/
})()



async function contribute(itemName, description, img,priceInBTC){
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJkZTM2MThEN0YwOTc2NWZBYzcyNzlEMzQzOTQwNUM0NWQxMzc4OTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyMzYxMjM0MTEwMSwibmFtZSI6Im9mZkNoYWluIn0.690wvdvlWRWPDDSMJ_bhKus1vf5eheGue7UrA5z0ly8'
    const client = new NFTStorage({ token: apiKey })
    var time = Date.now()
    var strTime =time.toString()
    const metadata = await client.store({
        name: itemName,
        time: time,
        price: priceInBTC,
        ID: await encrypt([itemName,description, strTime, priceInBTC]),
        description: description,
        image: new File([/* data */], img, { type: 'image/png' }),
    })
    return (metadata.url)
}(async () => {
    const link= await contribute('test', 'test2', 'abcdef.png', "sdsdsd")
    console.log(link)
})()
//variable 'hash' 






/*const cid = await client.storeDirectory([
    new File(['hello world'], 'hello.txt'),
    new File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
  ])
*/


/*  
1. convert encryption techniques into nftstorage native functions
2. eth address validation 
3. price integration 




*/