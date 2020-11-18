require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food stock remember rural honey goddess light army gasp'; 
let testAccounts = [
"0x3d233d5e94f5c53a776caf8526ae1e7df353c79a16c23d2de7d386007089e006",
"0xae2568f78eafee0adb9c5ea2f413588e5b6ec25d126c980419e87b5f1aab3270",
"0x2c8679cea63e29777f3818f2cdc796cda15fe3bb58078ceaf579c78c6d51b86d",
"0xc98791269210e4b842e23d3d168700fda16ca0ac6999b9beb5a37bd0ef9b5e8e",
"0x198ff4264725a97ae7aaaca77fd8ed95c804954c06f70abd0f049cec25db3a42",
"0x85fb57124b3c55a3d0a18998838182be0dc5ae12d6d56b2db3ded28049fb0022",
"0x1c9667417de059a8ba9869d569d07b8ca8c84eaccae4dd7a79b0e78693636764",
"0x00d1d7f0e17455a2700722997365ad73fcee54215de6eee5c71cfe5031b3ceef",
"0x3461f7eb9ba73fa42b1f255fce5db8b2bcd87edd472248ded3444164c2e4ca0d",
"0xe7fb9ff57cd2457001e74eacc0b4fcb465ce1c34bc30dae4bb370c9f12fc06f7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
