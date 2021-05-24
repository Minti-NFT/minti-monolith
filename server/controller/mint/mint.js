const { pinata, wallet } = require("../../utils");
const { ethers } = require("ethers");

const fs = require("fs");

const SINGLEASSET_ABI = require("../abis/SingleAsset.json");
const CONTRACT_ADDRESS = "0x83f6A3231149b38C32ebb2993a2cC095cBb54B51";

const uploadImage = async (image) => {
	try {
		const readableStream = fs.createReadStream(image);
		const uri = pinata.pinFileToIPFS(readableStream);
		if (uri.IpfsHash) return uri.IpfsHash;
		throw "unable to upload image";
	} catch (err) {
		console.log(err);
	}
};

const uploadMetadata = async (metadata) => {
	try {
		const uri = pinata.pinJSONToIPFS(metadata);
		if (uri.IpfsHash) return uri.IpfsHash;
		throw "unable to upload image";
	} catch (err) {
		console.log(err);
	}
};

const pushToPinata = async (metadata, image) => {
	try {
		const image_uri = await uploadImage(image);
		metadata["image"] = image_uri;
		const metadata_uri = await uploadMetadata(metadata);
		if (metadata_uri) return metadata_uri;
		throw "unable to push to pinata";
	} catch (err) {
		console.log(err);
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
		console.log(err);
	}
}

export default async function (target, metadata, image) {
	try {
		const contract = await getSingleAssetContract();
		const uri = pushToPinata(metadata, image);
		await contract.mint(target, uri);

		console.log("successfully minted");
	} catch (err) {
		console.log(err);
	}
}

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
