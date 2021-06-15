require("dotenv").config();

const axios = require("axios");
const sign = require("./signOAuth");

const generateHeaders = require("./generateHeaders");

const base_url = "https://api.twitter.com/oauth/request_token";
const queryParameters = {
	oauth_callback: encodeURIComponent(
		"http://localhost:3000/account/twitter/callback"
	),
};

const requestToken = async () => {
	const headers = generateHeaders();

	const oauth_signature = encodeURIComponent(
		sign(headers, process.env.TWITTER_CONSUMER_SECRET)
	);

	const stringed_authorization_header = `OAuth oauth_consumer_key="${headers.oauth_consumer_key}",oauth_signature_method="${headers.oauth_signature_method}",oauth_timestamp="${headers.oauth_timestamp}",oauth_nonce="${headers.oauth_nonce}",oauth_version="${headers.oauth_version}",oauth_signature="${oauth_signature}"`;

	try {
		const res = await axios.post(
			base_url,
			{},
			{
				parameters: queryParameters,
				headers: {
					Authorization: stringed_authorization_header,
				},
			}
		);
		return res.data;
	} catch (err) {}
};

module.exports = requestToken;
