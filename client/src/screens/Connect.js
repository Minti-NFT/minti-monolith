import styled from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Web3 from "web3";

//import Metamask from "@metamask/onboarding";
//import Fortmatic from "fortmatic";
//import WalletLink from "walletlink";
//import WalletConnect from "walletconnect";

import AppLogo from "../assets/Logos/Logo_App Icon.png";
import TextLogo from "../assets/Logos/Minti Logo_Logo-Brand Dark.svg";

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

const authMetamask = () => {};
const authFortmatic = () => {};
const authCoinbase = () => {};

const FlexedContainer = styled.div`
	display: flex;
`;

const Wrapper = styled(FlexedContainer)`
	height: 100vh;
	max-height: 100vh;
	overflow-y: auto;
`;

const LogoContainer = styled(FlexedContainer)`
	padding: 20px;
`;

const TextContainer = styled.img`
	height: calc(48px * 0.85);
`;

const IconContainer = styled.img`
	height: calc(50px * 0.85);
`;

const Left = styled.div`
	width: 20%;
	background-color: rgba(47, 233, 190, 1);
`;

const Right = styled(FlexedContainer)`
	width: 80%;
	background-color: #1c1c1e;
	align-items: center;
`;

const ConnectionButton = styled.div`
	border-radius: 40px;
	width: 100%;
	cursor: pointer;
	border: 1px solid #2c2c2e;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: 10px 0px;

	:hover {
		border-color: rgba(47, 233, 190, 1);
	}

	transition: 0.5s;
`;

const ConnectionIcon = styled.img`
	position: absolute;
	margin: 0px 10px;
	left: 0;
	height: 40px;
`;

const ConnectionText = styled.p`
	color: white;
	font-weight: 600;
	text-align: center;
`;

const Header = styled.p`
	font-weight: 800;
	font-size: 33px;
	color: white;
	margin-bottom: 10px;
	margin-top: 10px;
`;

const Desc = styled.p`
	color: #aeaeb2;
	font-size: 15px;
	font-weight: 600;
`;

const Connect = () => {
	return (
		<Wrapper>
			<Left>
				<FlexedContainer>
					<LogoContainer>
						<IconContainer src={AppLogo} alt="Logo" />
						<TextContainer src={TextLogo} alt="Minti" />
					</LogoContainer>
				</FlexedContainer>
			</Left>
			<Right>
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
					<Header>Connect your wallet</Header>
					<Desc>
						Connect with one of the available wallet providers or
						create a new wallet
						<br />
						<span className="prm-txt-clr">What is a wallet?</span>
					</Desc>
					<div>
						<ConnectionButton
							onClick={() => {
								authMetamask();
							}}
						>
							<ConnectionIcon src={MetamaskIcon} />
							<ConnectionText>Metamask</ConnectionText>
						</ConnectionButton>
						<ConnectionButton
							onClick={() => {
								authFortmatic();
							}}
						>
							<ConnectionIcon src={FortmaticIcon} />
							<ConnectionText>Fortmatic</ConnectionText>
						</ConnectionButton>
						<ConnectionButton
							onClick={() => {
								authCoinbase();
							}}
						>
							<ConnectionIcon src={CoinbaseIcon} />
							<ConnectionText>Coinbase Wallet</ConnectionText>
						</ConnectionButton>
						<ConnectionButton>
							<ConnectionIcon src={WalletConnectIcon} />
							<ConnectionText>WalletConnect</ConnectionText>
						</ConnectionButton>
						<ConnectionButton>
							<ConnectionIcon src={MyEtherWalletIcon} />
							<ConnectionText>MyEtherWallet</ConnectionText>
						</ConnectionButton>
					</div>
				</div>
			</Right>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
			/>
		</Wrapper>
	);
};

export default Connect;
