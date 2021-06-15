const axios = require("axios");

const access_token = async (redirect_uri, code) => {
	try {
		const res = await axios.get(
			"https://graph.facebook.com/v10.0/oauth/access_token",
			{
				client_id: process.env.FACBOOK_CLIENT_ID,
				redirect_uri: redirect_uri,
				client_secret: process.env.FACEBOOK_CLIENT_SECRET,
				code: code,
			}
		);

		return res.data;
	} catch (err) {
		return false;
	}
};

module.exports = access_token;
