require("dotenv").config();

const pinataSDK = require("@pinata/sdk");
const { ethers } = require("ethers");
const Web3 = require("web3");

const pinata = pinataSDK(
	process.env.PINATA_API_KEY,
	process.env.PINATA_API_SECRET
);

const provider = new ethers.providers.JsonRpcProvider(
	"https://rpc-mumbai.maticvigil.com"
);

let wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
wallet = wallet.connect(provider);
//const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

pinata
	.testAuthentication()
	.then((result) => {
		//handle successful authentication here
		console.log(result);
	})
	.catch((err) => {
		//handle error here
		console.log(err);
	});

module.exports = {
	pinata,
	provider,
	wallet,
};
