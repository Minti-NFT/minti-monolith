/*
 */

const chalk = require("chalk");

const { PostModel } = require("../../models/post");
const { AccountModel } = require("../../models/account");

const update = async (ownerId, postId, postInfo) => {
	try {
		const owner = await AccountModel.findById(ownerId).exec();
		if (owner && owner.drafts.includes(postId)) {
			const post = await PostModel.findByIdAndUpdate(
				postId,
				{ ...postInfo },
				{ overwrite: true }
			).exec();
			return post;
		}
	} catch (err) {
		console.log(chalk.red(err));
		return false;
	}
};

module.exports = async (ownerId, postId, postInfo) =>
	await update(ownerId, postId, postInfo);
