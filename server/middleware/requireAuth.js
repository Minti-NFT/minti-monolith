const requireAuth = (req, res, next) => {
	const { _id, address } = req.session.account;
	if (!_id && !address) {
		return res.status(401).send({ message: "Unauthorized" });
	}
	next();
};

module.exports = requireAuth;
