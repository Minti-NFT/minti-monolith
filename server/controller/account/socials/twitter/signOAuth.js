const crypto = require("crypto");

const encodeParams = require("./encodeParams");

const sign = (params, secret, token) => {
	let encodedUrl = encodeURIComponent(base_url);

	let encodedParams = encodeParams(params);
	const signature_base_string = `POST&${encodedUrl}&${encodedParams}`;

	return crypto
		.createHmac("sha1", `${secret}&${token ? token : ""}`)
		.update(signature_base_string)
		.digest()
		.toString("base64");
};

module.exports = sign;
