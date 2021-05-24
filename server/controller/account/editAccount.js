/*
 */

const { AccountModel } = require("../../models/account");

const getAccount = async (accountId) => {
	try {
		const account = await AccountModel.findById(accountId).exec();
		return account;
	} catch (err) {
		return false;
	}
};

export default async (accountId) => await getAccount(accountId);
