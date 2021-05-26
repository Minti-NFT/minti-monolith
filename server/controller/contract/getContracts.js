const { ethers } = require("ethers");
const chalk = require("chalk");

const { wallet } = require("../../utils");

const SINGLE_ASSET_ABI = require("../../abis/SingleAsset.json");
const CONTRACT_ADDRESS = "0x83f6A3231149b38C32ebb2993a2cC095cBb54B51";

const getSingleAssetContract = () => {
	try {
		let contract = new ethers.Contract(
			CONTRACT_ADDRESS,
			SINGLE_ASSET_ABI.abi,
			wallet
		);
		return contract;
	} catch (err) {
		console.log(chalk.red(err));
	}
};

const SINGLE_ASSET_CONTRACT = getSingleAssetContract();

module.exports = { SINGLE_ASSET_CONTRACT };
