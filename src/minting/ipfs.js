const Hash = require('ipfs-only-hash')

async function encrypt(NFTdata){
    const data =NFTdata;
    const hash = await Hash.of(data);
    var newHash= hash;
    return await newHash;
}

encrypt('/Users/jackmcdonald/Documents/twitterExtract/abcdef.PNG').then(result => console.log(result))

module.exports = { encrypt };

