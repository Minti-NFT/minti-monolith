/*
 */

const chalk = require("chalk");

const { PostModel } = require("../../models/post");
const { AccountModel } = require("../../models/account");

const compose = async (ownerId, postInfo) => {
	try {
		const owner = await AccountModel.findById(ownerId).exec();
		if (owner) {
			const composedPost = await PostModel.create({ ...postInfo });

			owner.drafts.push(composedPost._id);
			await owner.save();
			return true;
		}
	} catch (err) {
		console.log(chalk.red(err));
		return false;
	}
};

module.exports = async (ownerId, postInfo) => await compose(ownerId, postInfo);
