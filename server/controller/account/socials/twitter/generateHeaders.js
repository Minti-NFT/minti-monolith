const { v1 } = require("uuid");

const generateHeaders = () => {
	const oauth_timestamp = Math.floor(Date.now() / 1000).toString();
	const oauth_nonce = v1();
	return {
		oauth_consumer_key: process.env.TWITTER_CONSUMER_KEY,
		oauth_nonce: oauth_nonce,
		oauth_signature_method: "HMAC-SHA1",
		oauth_timestamp: oauth_timestamp,
		oauth_version: "1.0",
	};
};

module.exports = generate_headers;
