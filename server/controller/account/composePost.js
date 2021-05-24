/*
 */

import { PostModel } from "../../models/post";
import { AccountModel } from "../../models/account";

const compose = async (ownerId, postInfo) => {
	try {
		const owner = await AccountModel.findById(ownerId).exec();
		if (owner) {
			const composedPost = await PostModel.create({ ...postInfo });
			await composedPost.save();

			owner.drafts.push(composedPost._id);
			await owner.save();
			return true;
		}
		throw "Invalid props for models";
	} catch (err) {
		return false;
	}
};

export default async (ownerId, postInfo) => await compose(ownerId, postInfo);
