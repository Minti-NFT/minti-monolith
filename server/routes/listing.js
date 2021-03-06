const express = require("express");
const chalk = require("chalk");

let listingRouter = express.Router();

const createListing = require("../controller/listing/createListing");
const getInfo = require("../controller/listing/getInfo");

listingRouter.post("/create", async (req, res) => {
	try {
		if (req.session._id) {
			const listing = await createListing(req.session._id, req.body);
			if (listing)
				return res.status(200).send({ success: true, data: listing });
		}
		return res.status(200).send({ success: false });
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			success: false,
			serr_msg: "An error occurred, we're looking into it!",
		});
	}
});

module.exports = listingRouter;
