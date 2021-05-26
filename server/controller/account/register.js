/*
 */
const chalk = require("chalk");

const { AccountModel } = require("../../models/account");

const register = async (address) => {
	try {
		const account = await AccountModel.create({ address: address });
		return account._id;
	} catch (err) {
		console.log(chalk.red(err));
		return false;
	}
};

module.exports = async (address) => register(address);
