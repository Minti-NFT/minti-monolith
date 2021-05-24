/*
 */

const { AccountModel } = require("../../models/account");

const register = async (address) => {
	try {
		await AccountModel.create({ address: address }).exec();
		return AccountModel._id;
	} catch (err) {
		return false;
	}
};

export default async (address) => register(address);
