/*
 */
const chalk = require("chalk");

const { AccountModel } = require("../../models/account");

const register = async (address) => {
	try {
		const existingAccount = await AccountModel.findOne({
			address: address,
		}).exec();
		if (existingAccount) return existingAccount;
		const account = await AccountModel.create({ address: address });
		return account;
	} catch (err) {
		console.log(chalk.red(err));
		return false;
	}
};

module.exports = async (address) => register(address);
