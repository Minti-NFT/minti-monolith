/*
 */

import { ListingModel } from "../../models/listing";
import { AccountModel } from "../../models/account";

const validatePost = (postInfo) => {
	return true;
};

const compose = (ownerId, postInfo) => {
	if (validatePost(postInfo) === false) {
		return false;
	}
};

export default (ownerId, postInfo) => {
	return compose(ownerId, postInfo);
};
