const { pinata, wallet } = require("../../utils");
const { ethers } = require("ethers");

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

const SINGLEASSET_ABI = require("../../abis/SingleAsset.json");
const CONTRACT_ADDRESS = "0x83f6A3231149b38C32ebb2993a2cC095cBb54B51";
const WALLET_ADDRESS_1 = "0xbA842b7DA417Ba762D75e8F99e11c2980a8F8051";

const test_data_1 = require("../../test_data_1.json");
const test_image_1 = path.join(__dirname, "../../test_image_1.png");

const uploadImage = async (image) => {
	try {
		const readableStream = fs.createReadStream(image);
		const uri = await pinata.pinFileToIPFS(readableStream);
		if (uri.IpfsHash) return uri.IpfsHash;
		//throw "unable to upload image";
	} catch (err) {
		console.log(chalk.red(err));
	}
};

const uploadMetadata = async (metadata) => {
	try {
		const uri = await pinata.pinJSONToIPFS(metadata);
		if (uri.IpfsHash) return uri.IpfsHash;
		//throw "unable to upload json";
	} catch (err) {
		console.log(chalk.red(err));
	}
};

const pushToPinata = async (metadata, image) => {
	try {
		const asset_uri = await uploadImage(image);
		metadata["image"] = asset_uri;
		const metadata_uri = await uploadMetadata(metadata);
		if (metadata_uri) return { metadata_uri, asset_uri };
		//throw "unable to push to pinata";
	} catch (err) {
		console.log(chalk.red(err));
	}
};

async function getSingleAssetContract() {
	try {
		let contract = new ethers.Contract(
			CONTRACT_ADDRESS,
			SINGLEASSET_ABI.abi,
			wallet
		);
		return contract;
	} catch (err) {
		console.log(chalk.red(err));
	}
}

const mint = async (target, metadata, image) => {
	try {
		const contract = await getSingleAssetContract();
		const { metadata_uri, asset_uri } = await pushToPinata(metadata, image);
		const transaction = await contract.mint(target, metadata_uri);
		const receipt = await transaction.wait();
		const tokenId = ethers.utils.arrayify(
			receipt.events[0].args.tokenId["_hex"]
		)[0];

		console.log(
			"🌿 Successfully minted a new NFT:" +
				"\nToken ID: " +
				chalk.magenta(tokenId) +
				"\nMetadata URI: " +
				chalk.magenta(metadata_uri) +
				"\nAsset URI: " +
				chalk.magenta(asset_uri) +
				"\nTarget: " +
				chalk.magenta(target) +
				"\nFrom: " +
				chalk.magenta(transaction.from)
		);
	} catch (err) {
		console.log(chalk.red(err));
	}
};

//mint(WALLET_ADDRESS_1, test_data_1, test_image_1);

export default mint;

/*
async function mintAsset(target, uri) {
	const contract = await getSingleAssetContract();
	await contract.mint(target, uri);
	console.log("successfully minted");
}

mintAsset(
	"0x09b1769771a78D147CaFc5cCC971a94bDA5C342a",
	"ipfs://QmcpdCcAjmqNBrW62gX4gARjiSsQsCbH8SbFGdVsvyXQB3"
);
*/
