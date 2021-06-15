const encodeParams = (parameters) => {
	let ordered = {};
	Object.keys(parameters)
		.sort()
		.forEach(function (key) {
			ordered[key] = parameters[key];
		});
	let encodedParameters = "";
	for (let k in ordered) {
		const key = escape(k);
		const value = escape(ordered[k]);
		if (encodedParameters === "") {
			encodedParameters += `${key}=${value}`;
		} else {
			encodedParameters += `&${key}=${value}`;
		}
	}

	return encodeURIComponent(encodedParameters);
};

module.exports = encodeParams;
