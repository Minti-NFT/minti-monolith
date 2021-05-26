const chalk = require("chalk");

const { mint } = require("../mint/mint");

const createListing = async (targetId, listingInfo) => {
	try {
		const metadata = listingInfo["metadata"];
		const image = listingInfo["image"];
		const res = await mint(targetId, metadata, image);
		return res;
	} catch (err) {
		console.log(chalk.red(err));
	}
};

module.exports = async (targetId, listingInfo) =>
	await createListing(targetId, listingInfo);
// mint nft
