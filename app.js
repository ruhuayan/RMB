var Tx = require('ethereumjs-tx');
var Web3 = require('web3');
const web = new Web3('https://rapstern.infura.io/');

const account1 = '';
const account2 = '';
const privateKey = Buffer.from(process.env.PRIVATE_KEY);

Web3.eth.getTransactionCount(account1, (err, txCount)=>{
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')), 
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new Tx(txObject);
    tx.sign(privateKey);
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');
    web3.eth.sendSignedTransaction(raw, (err, txHash)=>{

    })
})