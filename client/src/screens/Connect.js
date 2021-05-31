import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Web3 from "web3";

//import Metamask from "@metamask/onboarding";
//import Fortmatic from "fortmatic";
//import WalletLink from "walletlink";
//import WalletConnect from "walletconnect";

import AppLogo from "../assets/Logos/Logo_App Icon.png";
import TextLogo from "../assets/Logos/Minti Logo_Logo-Brand Dark.svg";

import ConnectComponents from "../styles/screens/Connect";
import ConnectButton from "../components/Connect/Button";

import MetamaskIcon from "../assets/Icons-svg/Wallets/Metamask.png";
import FortmaticIcon from "../assets/Icons-svg/Wallets/Fortmatic.png";
import CoinbaseIcon from "../assets/Icons-svg/Wallets/Coinbase.png";
import WalletConnectIcon from "../assets/Icons-svg/Wallets/WalletConnect.png";
import MyEtherWalletIcon from "../assets/Icons-svg/Wallets/MyEtherWallet.png";

import BackArrow from "../assets/Icons-svg/Arrow/Arrow-Brand primary.svg";

const web3 = new Web3(window.web3.currentProvider);
const notify = (msg) => {
	console.log(msg);
	toast.dark(msg, {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
	});
};
/*
// Metamask
const authMetamask = async () => {
	try {
		const { ethereum } = window;
		let forwarderOrigin = "http://localhost:3000";

		const isMetamaskInstalled = Boolean(ethereum && ethereum.isMetaMask);
		const onboarding = new Metamask({ forwarderOrigin });

		console.log(await web3.eth.net.getNetworkType());

		if (!isMetamaskInstalled) {
			onboarding.startOnboarding();
		} else {
			const res = await ethereum.request({
				method: "eth_requestAccounts",
			}); // address
			console.log(res);
		}
	} catch (err) {
		notify(err);
	}
};

// Fortmatic
const authFortmatic = async () => {
	try {
		const fm = new Fortmatic("pk_test_9468DAA60936232B");
		window.web3 = new Web3(fm.getProvider());

		const text = "Authorize Minti";
		const accounts = await window.web3.eth.getAccounts();
		const from = accounts[0];

		const result = await window.web3.eth.personal.sign(text, from);
		console.log(result);
	} catch (err) {
		notify(err);
	}
};

// Coinbase
const authCoinbase = async () => {
	try {
		const walletLink = new WalletLink({
			appName: "Minti",
			appLogo: AppLogo,
			darkMode: true,
		});

		const ethereum = walletLink.makeWeb3Provider(
			"https://mainnet.infura.io/v3/11b9aca2a7514989a1327501f33fdb15",
			1
		);

		const res = await ethereum.enable();
		console.log(res);
	} catch (err) {
		notify(err);
	}
};
*/

const authMetamask = () => {
	notify("This authentication method is not currently supported!");
};
const authFortmatic = () => {
	notify("This authentication method is not currently supported!");
};
const authCoinbase = () => {
	notify("This authentication method is not currently supported!");
};
const authWalletConnect = () => {
	notify("This authentication method is not currently supported!");
};
const authMyEtherWallet = () => {
	notify("This authentication method is not currently supported!");
};

const Connections = [
	{
		name: "Metamask",
		src: MetamaskIcon,
		onClick: authMetamask,
	},
	{
		name: "Fortmatic",
		src: FortmaticIcon,
		onClick: authFortmatic,
	},
	{
		name: "Coinbase Wallet",
		src: CoinbaseIcon,
		onClick: authCoinbase,
	},
	{
		name: "WalletConnect",
		src: WalletConnectIcon,
		onClick: authWalletConnect,
	},
	{
		name: "MyEtherWallet",
		src: MyEtherWalletIcon,
		onClick: authMyEtherWallet,
	},
];

const Connect = () => {
	return (
		<ConnectComponents.Wrapper>
			<ConnectComponents.Left>
				<ConnectComponents.FlexedContainer>
					<ConnectComponents.LogoContainer>
						<ConnectComponents.IconContainer
							src={AppLogo}
							alt="Logo"
						/>
						<ConnectComponents.TextContainer
							src={TextLogo}
							alt="Minti"
						/>
					</ConnectComponents.LogoContainer>
				</ConnectComponents.FlexedContainer>
			</ConnectComponents.Left>
			<ConnectComponents.Right>
				<div style={{ maxWidth: "330px", marginLeft: "120px" }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							cursor: "pointer",
						}}
					>
						<img
							src={BackArrow}
							alt="back"
							style={{ marginRight: "10px" }}
						/>
						<p className="prm-txt-clr" style={{ fontWeight: 600 }}>
							Go back
						</p>
					</div>
					<ConnectComponents.Header>
						Connect your wallet
					</ConnectComponents.Header>
					<ConnectComponents.Desc>
						Connect with one of the available wallet providers or
						create a new wallet
						<br />
						<span className="prm-txt-clr">What is a wallet?</span>
					</ConnectComponents.Desc>
					<div>
						{Connections.map((el, i) => (
							<ConnectButton
								key={i}
								name={el.name}
								src={el.src}
								onClick={el.onClick}
							/>
						))}
					</div>
				</div>
			</ConnectComponents.Right>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
			/>
		</ConnectComponents.Wrapper>
	);
};

export default Connect;
