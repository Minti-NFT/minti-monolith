const axios = require("axios");

const tweet = async (access_token, token_secret, status) => {
	const headers = generateHeaders();

	headers.oauth_token = access_token;

	const oauth_signature = encodeURIComponent(
		sign(headers, process.env.TWITTER_CONSUMER_SECRET, token_secret)
	);

	const stringed_authorization_header = `OAuth oauth_consumer_key="${headers.oauth_consumer_key}",oauth_token="${headers.oauth_token}",oauth_signature_method="${headers.oauth_signature_method}",oauth_timestamp="${headers.oauth_timestamp}",oauth_nonce="${headers.oauth_nonce}",oauth_version="${headers.oauth_version}",oauth_signature="${oauth_signature}"`;

	try {
		const res = await axios.post(
			base_url,
			{},
			{
				parameters: {
					status: status,
				},
				headers: {
					Authorization: stringed_authorization_header,
				},
			}
		);
		return res.data;
	} catch (err) {}
};

module.exports = tweet;
