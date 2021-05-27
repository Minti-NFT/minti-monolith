const chalk = require("chalk");
const path = require("path");

const mint = require("../mint/mint");
const test_image_1 = path.join(__dirname, "../../test_image_1.png");

const createListing = async (targetId, listingInfo) => {
	try {
		const metadata = listingInfo["metadata"];
		const image = listingInfo["image"] || test_image_1;
		const res = await mint(targetId, metadata, image);
		return res;
	} catch (err) {
		console.log(chalk.red(err));
		return false;
	}
};

module.exports = async (targetId, listingInfo) =>
	await createListing(targetId, listingInfo);
// mint nft
