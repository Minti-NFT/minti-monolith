const express = require("express");
const chalk = require("chalk");

let accountRouter = express.Router();

const requireAuthMiddleware = require("../middleware/requireAuth");

const composePost = require("../controller/account/composePost");
const connectSocial = require("../controller/account/connectSocial");
const editAccount = require("../controller/account/editAccount");
const getAccount = require("../controller/account/getAccount");
const findByAddress = require("../controller/account/findByAddress");
const publishPost = require("../controller/account/publishPost");
const updatePost = require("../controller/account/updatePost");
const register = require("../controller/account/register");
const retrieveAssets = require("../controller/account/retrieveAssets");
//const authTwitter = require("../controllers/account/socials/twitter/authTwitter");

accountRouter.post("/compose", requireAuthMiddleware, async (req, res) => {
	//✅
	try {
		const { account } = req.sessions;
		if (account._id) {
			const isComposed = await composePost(account._id, req.body);
			if (isComposed)
				return res
					.status(200)
					.send({ success: true, payload: isComposed });
		}
		return res.status(200).send({ success: false });
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			err_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.post("/socials", async (req, res) => {
	try {
	} catch (err) {
		console.log(chalk.red(err));
	}
});

accountRouter.post("/account", async (req, res) => {
	try {
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			err_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.get("/findById", async (req, res) => {
	try {
		const account = await getAccount(req.query._id);
		if (account)
			return res.status(200).send({ success: true, payload: account });
		return res.status(200).send({ success: false });
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			err_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.post("/publish", requireAuthMiddleware, async (req, res) => {
	try {
		const { account } = req.sessions;
		if (account._id) {
			const published = await publishPost(account._id, req.body.postId);
			if (published)
				return res
					.status(200)
					.send({ success: true, payload: published });
		}
		return res.status(200).send({ success: false });
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			err_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.patch("/update", requireAuthMiddleware, async (req, res) => {
	try {
		const { account } = req.sessions;
		if (account._id) {
			const updated = await updatePost(
				account._id,
				req.body.postId,
				req.body.post
			);
			if (updated)
				return res
					.status(200)
					.send({ success: true, payload: updated });
		}
		return res.status(200).send({ success: false });
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			err_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.post("/register", async (req, res) => {
	//✅
	try {
		if (req.session.account && req.session.account._id) {
			return res
				.status(200)
				.send({ success: true, payload: req.session.account });
		}

		const account = await register(req.body.address);
		if (account) {
			req.session.account = account;
			return res.status(200).send({ success: true, payload: account });
		}

		return res.status(200).send({ success: false });
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			err_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.get("/assets", async (req, res) => {
	try {
	} catch (err) {
		console.log(chalk.red(err));
		return res.status(400).send({
			err_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.get("/auth", async (req, res) => {
	try {
		switch (req.query.platform) {
			case "twitter":
				return res
					.status(200)
					.send({ success: true, payload: authTwitter() });
			case "instagram":
				return res
					.status(200)
					.send({ success: true, payload: "coming soon" });
			default:
				throw "invalid platform";
		}
	} catch {
		return res.status(400).send({
			err_msg: "An error occurred, we're looking into it!",
		});
	}
});

accountRouter.get("/findByAddress", async (req, res) => {
	try {
		console.log(req.session.account);
		const account = await findByAddress(req.query.address);
		if (account)
			return res.status(200).send({ success: true, payload: account });
		return res.status(200).send({ success: false });
	} catch (err) {
		return res.status(400).send({
			err_msg: "An error occurred, we're looking into it!",
		});
	}
});

module.exports = accountRouter;
