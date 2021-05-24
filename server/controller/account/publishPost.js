/*
 */

import { PostModel } from "../../models/post";

const validatePost = (postInfo) => {
	let hasTwitter = postInfo.post_to.includes("TWITTER");
	let hasInstagram = postInfo.post_to.includes("INSTAGRAM");

	if (!hasInstagram || !hasTwitter) {
		return false;
	}

	if (
		(hasTwitter && postInfo.text.length > 280) ||
		postInfo.text.length > 2200
	) {
		return false;
	}

	if (!postInfo.asset_address || !postInfo.asset_id) {
		return false;
	}
};

const publishToTwitter = (ownerId, postInfo) => {
	return true;
};

const publishToInstagram = (ownerId, postInfo) => {
	return true;
};

const publishTo = (ownerId, outlet, postInfo) => {
	switch (outlet) {
		case "Twitter":
			return publishToTwitter(ownerId, postInfo);
		case "Instagram":
			return publishToInstagram(ownerId, postInfo);
		default:
			return false;
	}
};

const publish = async (ownerId, postId) => {
	try {
		let owner = await AccountModel.findById(ownerId).exec();
		let post = await PostModel.findById(powerId).exec();
		let postIndex = owner.drafts.indexOf(postId);

		if (!owner && !post && !postIndex && !validatePost(post)) return false;

		for (const outlet in post.outlets) {
			if (!publishTo(ownerId, outlet, post)) return false;
		}

		owner.drafts.splice(postIndex, 1);
		await PostModel.deleteOne({ _id: postId }).exec();
		await owner.drafts.save();

		return true;
	} catch (err) {
		return false;
	}
};

export default async (ownerId, postInfo) => await publish(ownerId, postInfo);
