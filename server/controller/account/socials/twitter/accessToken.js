const axios = require("axios");

const getAccessToken = async (oauth_token, oauth_verifier) => {
	try {
		const res = await axios.post(
			"https://api.twitter.com/oauth/access_token",
			{},
			{
				parameters: {
					oauth_token: oauth_token,
					oauth_verifier: oauth_verifier,
				},
			}
		);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

module.exports = getAccessToken;
