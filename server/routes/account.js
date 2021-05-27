const express = require("express");
const chalk = require("chalk");

let accountRouter = express.Router();

const composePost = require("../controller/account/composePost");
const connectSocial = require("../controller/account/connectSocial");
const editAccount = require("../controller/account/editAccount");
const getAccount = require("../controller/account/getAccount");
const publishPost = require("../controller/account/publishPost");
const register = require("../controller/account/register");
const retrieveAssets = require("../controller/account/retrieveAssets");

accountRouter.put("/compose", async (req, res) => {
	//✅
	try {
		const isComposed = await composePost(req.headers._id, req.body);
		if (isComposed)
			return res.status(200).send({ success: true, data: isComposed });
		throw "";
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			success: false,
			serr_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.put("/socials", async (req, res) => {
	try {
	} catch (err) {
		console.log(chalk.red(err));
	}
});

accountRouter.patch("/account", async (req, res) => {
	try {
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			success: false,
			serr_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.get("/account", async (req, res) => {
	try {
		const account = await getAccount(req.headers._id);
		if (account)
			return res.status(200).send({ success: true, data: account });
		throw "";
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			success: false,
			serr_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.post("/publish", async (req, res) => {
	try {
		const published = await publishPost(req.headers._id, req.body);
		if (published)
			return res.status(200).send({ success: true, data: published });
		throw "";
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			success: false,
			serr_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.post("/register", async (req, res) => {
	//✅
	try {
		const accountId = await register(req.body.address);
		if (accountId)
			return res.status(200).send({ success: true, data: accountId });
		throw "";
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			success: false,
			serr_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.get("/assets", async (req, res) => {
	try {
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			success: false,
			serr_msg: "An error occurred, we're looking into it!",
		});
	}
});

module.exports = accountRouter;
