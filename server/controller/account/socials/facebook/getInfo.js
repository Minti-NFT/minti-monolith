const axios = require("axios");

const getInfo = async (fields, access_token) => {
	try {
		const res = await axios.get("https://graph.facebook.com/v10.0/me", {
			fields: fields,
			access_token: access_token,
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

module.exports = getInfo;
