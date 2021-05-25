const Hash = require('ipfs-only-hash')

async function encrypt(NFTdata){
    const data =NFTdata;
    const hash = await Hash.of(data);
    var newHash= hash;
    return newHash;
}


module.exports = { encrypt };

