const { ethers } = require("ethers");
const fs = require("fs");
const chalk = require("chalk");

const { pinata } = require("../../utils");
const { AccountModel } = require("../../models/account");
const { SINGLE_ASSET_CONTRACT } = require("../contract/getContracts");

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
		metadata["image"] = "ipfs://" + asset_uri;
		const metadata_uri = await uploadMetadata(metadata);
		if (metadata_uri) return { metadata_uri, asset_uri };
		//throw "unable to push to pinata";
	} catch (err) {
		console.log(chalk.red(err));
	}
};

const mint = async (targetId, metadata, image) => {
	try {
		const target = await AccountModel.findById(targetId).exec();
		if (!target) return false;

		const { metadata_uri, asset_uri } = await pushToPinata(metadata, image);
		const transaction = await SINGLE_ASSET_CONTRACT.mint(
			target.address,
			metadata_uri
		);
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
				chalk.magenta(target.address) +
				"\nFrom: " +
				chalk.magenta(transaction.from)
		);
		return true;
	} catch (err) {
		console.log(chalk.red(err));
		return false;
	}
};

//mint(WALLET_ADDRESS_1, test_data_1, test_image_1);

module.exports = async (targetId, metadata, image) =>
	mint(targetId, metadata, image);

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
