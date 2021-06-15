/*
 */

const { ListingModel } = require("../../models/listing");

const getInfo = async (requestId, listingId, assetAddress) => {
	try {
		let listing = await ListingModel.findById(listingId).exec();
		let asset = ""; // baseuri + tokenId of listing

		return {
			listing: listing,
			asset: asset,
		};
	} catch (err) {
		return false;
	}
};

module.exports = async (listingId, assetAddress) =>
	await getInfo(listingId, assetAddress);
