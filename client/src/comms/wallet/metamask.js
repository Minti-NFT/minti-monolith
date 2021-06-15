import { ethers } from "ethers";
import axios from "axios";
import Cookies from "universal-cookie";

//const cookies = new Cookies();

const connect = async () => {
	await window.ethereum.enable();
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();

	try {
		if (typeof window.ethereum) {
			let address = await signer.getAddress();

			if (!signer) {
				await signer.signMessage(
					"Sign in to Minti Marketplace with Metamask"
				);
				address = await signer.getAddress();
			}

			const res = await axios.post("/account/register", {
				address: address,
			});

			if (res.data.success) {
				console.log(res.data.payload);
				return res.data.payload;
			}

			/*if (!cookieWallet) {
				await signer.signMessage("Sign in to Minti with metamask.");
				const address = await signer.getAddress();
				const account = {
					provider: "Metamask",
					address: address,
					chain: {
						identifier: "ETHEREUM",
					},
				};
				cookies.set(
					"wallet",
					{
						accounts: [account],
						active: account,
					},
					{ path: "/" }
				);

				cookieWallet = cookies.get("wallet");

				console.log("Selecting wallet\n", cookieWallet["active"]);
			}

			const existingAccount = await axios.get("/account/findByAddress", {
				params: {
					address: cookieWallet["active"]["address"],
				},
			});

			if (existingAccount["data"]["success"] === false) {
				const newAccount = await axios.post("/account/register", {
					address: cookieWallet["active"]["address"],
				});

				console.log(
					"Creating new account!",
					newAccount["data"]["payload"]
				);
				cookies.set("account", { id: newAccount._id });
			} else {
				console.log(
					"Account exists!",
					existingAccount["data"]["payload"]
				);
				cookies.set("account", { id: existingAccount._id });
			}*/
		}
	} catch (err) {
		console.log(err);
		return false;
	}
};

export default connect;
