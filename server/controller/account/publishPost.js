/*
 */

const validatePost = (ownerId, postInfo) => {
	return true;
};

const publishToTwitter = (ownerId, postInfo) => {
	return true;
};

const publishToInstagram = (ownerId, postInfo) => {
	return true;
};

const publishTo = (owerId, outlet, postInfo) => {
	switch (outlet) {
		case "Twitter":
			return publishToTwitter(ownerId, postInfo);
		case "Instagram":
			return publishToInstagram(ownerId, postInfo);
		default:
			return;
	}
};

const publish = (ownerId, postInfo) => {
	if (validatePost(postInfo) === false) {
		return false;
	}

	for (const outlet in postInfo.outlets) {
		if (publshTo(outlet, postInfo) !== true) {
			return false;
		}
	}
};

export default (ownerId, outlets, postInfo) => {};
