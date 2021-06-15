const chalk = require("chalk");

const { AccountModel } = require("../../models/account");

const findByAddress = async (address) => {
	try {
		const account = await AccountModel.findOne({ address: address }).exec();
		if (account) return account;
	} catch (err) {
		console.log(chalk.red(err));
	}
};

module.exports = async (address) => await findByAddress(address);
