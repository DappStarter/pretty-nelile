require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rescue noble minor hockey civil army general'; 
let testAccounts = [
"0xca469933c9a5c142a0d85e654b1322d1d58a020fc79158f24c331485a85a2409",
"0x98b5e2af596131ecd59f6f22215171240cd4b0a13860dd3c59ed8828a7dfa27f",
"0xfeb527078494982edd71846d459a4e10623c012a95e29f3a3aadc6e70608361f",
"0x80d920e28dd3e142d2653cbe3b03975e2ace1e9c14054cc212f1ac2f235a5a88",
"0xdc0e5132d1e9a95c75c742fc09d1e5c30d87024ab6351c32f0e7875b67a1eb92",
"0xb7a390628e67488971a81e17261ce588fb42196aae62aabaa1ff4c0139bf82dd",
"0x3ee01854da4bac5749bb0e17a6035cc989e4dee1bb28be6c9f78035b0db99919",
"0xfee7dfdbad3b884d339122355671352c227f0020d0a3813fe2de9223154e91c4",
"0x8301b3829070e6060dc3348baf88ef38bafad778a412ab360d4ca4c357808e35",
"0xd52a0cdd6969677d724a9c4b8df13daea951edcd4ba2f1df308625d85af54a7c"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
