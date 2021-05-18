import styled from "styled-components";

import BaseScreen from "./BaseScreen";
import SingleIcon from "../assets/Mint NFT/Dark mode-Single NFT.png";
import MultipleIcon from "../assets/Mint NFT/Dark mode-Multiple NFT.png";

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	padding: 10px;
`;

const Left = styled.div`
	width: 15%;
	margin: 0px 10px;
	background-color: transparent;
	@media (max-width: 1000px) {
		display: none;
	}
`;

const Center = styled.div`
	width: 55%;
	margin: 0px 10px;
	padding: 0px 10%;
	margin: auto;

	@media (max-width: 1000px) {
		width: 90%;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

const Right = styled.div`
	width: 30%;
	margin: 0px 10px;
	background-color: transparent;
	position: relative;
	@media (max-width: 1000px) {
		display: none;
	}
`;

const RightBorder = styled.div`
	height: calc(60% + 10px);
	position: absolute;
	margin-top: -10px;
	width: 1px;
	background-color: rgba(80, 85, 92, 1);
`;

const Preview = styled.div`
	padding: 20px;
	border-radius: 20px;
	width: 70%;
	height: 45%;
	border: 1px solid rgba(58, 58, 60, 1);
	margin: auto;
	color: rgba(174, 174, 178, 1);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MintWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 200px;
	margin: 30px 0px;
`;

const MintButton = styled.div`
	height: 100%;
	width: 45%;
	border-radius: 20px;
	border: 1px solid rgba(58, 58, 60, 1);
	text-align: center;
	padding: 15px 0px;
	cursor: pointer;

	:hover {
		border: 3px solid rgba(147, 233, 190, 1);
		margin: -2px;
	}
`;

const MintImg = styled.img`
	height: 60%;
	margin-top: 20px;
`;

const MintLabel = styled.h3`
	color: rgba(242, 242, 247, 1);
`;

const FileWrapper = styled.div`
	border: 3px dashed rgba(142, 142, 147, 1);
	border-radius: 8px;
	width: 100%;
	height: 200px;
	text-align: center;
	padding-top: 10px;
	margin: 40px 0px;
	color: rgba(174, 174, 178, 1);
`;

const FileButton = styled.div`
	font-weight: 600;
	color: rgba(147, 233, 190, 1);
	background-color: rgba(235, 235, 245, 0.18);
	border-radius: 30px;
	padding: 15px;
	margin: 0px 25%;
	margin-top: 50px;
	cursor: pointer;
`;

const Input = styled.input`
	background-color: rgba(235, 235, 245, 0.18);
	border-radius: 8px;
	height: 54px;
	border: none;
	font-weight: 600;
	padding: 0px 20px;
	margin: 5px 0px;
	max-width: calc(100% - 25px);
	font-size: 20px;
	color: rgba(174, 174, 178, 1);
	:focus {
		outline: none;
	}
`;

const PrimaryInput = styled(Input)`
	width: 100%;
`;

const PrimaryTextArea = styled.textarea`
	background-color: rgba(235, 235, 245, 0.18);
	border-radius: 8px;
	height: 54px;
	min-height: 54px;
	border: none;
	font-weight: 600;
	padding: 10px 20px;
	margin: 5px 0px;
	max-width: calc(100% - 25px);
	font-size: 20px;
	color: rgba(174, 174, 178, 1);
	width: 100%;
	resize: none;
	:focus {
		outline: none;
	}
`;

const PropertyContainer = styled.div`
	width: 70%;
	margin: 20px 0px;
	@media (max-width: 600px) {
		width: 100%;
	}
`;

const Switch = (props) => {
	const SwitchContainer = styled.label`
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	`;

	const SwitchSlider = styled.span`
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.2s;
		transition: 0.2s;
		border-radius: 34px;

		:before {
			position: absolute;
			content: "";
			height: 26px;
			width: 26px;
			left: 4px;
			bottom: 4px;
			background-color: white;
			-webkit-transition: 0.2s;
			transition: 0.2s;
			border-radius: 50%;
		}
	`;

	const SwitchInput = styled.input`
		opacity: 0;
		width: 0;
		height: 0;

		&:checked + ${SwitchSlider} {
			background-color: #80dae7;
		}

		&:focused + ${SwitchSlider} {
			box-shadow: 0 0 1px #80dae7;
		}

		&:checked + ${SwitchSlider}:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}
	`;

	return (
		<SwitchContainer>
			<SwitchInput
				type="checkbox"
				onClick={(e) => {
					e.checked = !e.checked;
				}}
			/>
			<SwitchSlider class="slider round"></SwitchSlider>
		</SwitchContainer>
	);
};

const SwitchContent = (props) => {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				margin: "20px 0px",
			}}
		>
			<div>
				<h3 className="prm-txt-clr" style={{ margin: "5px 0px" }}>
					{props.heading}
				</h3>
				<p
					style={{
						color: "rgba(229,229,234,1)",
						margin: "0",
						maxWidth: "70%",
					}}
				>
					{props.description}
				</p>
			</div>
			<div onClick={props.onClick}>
				<Switch />
			</div>
		</div>
	);
};

const PropertyContent = (props) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<Input
				style={{ width: "37.5%" }}
				placeholder={"e.g. " + props.left}
			/>
			<Input
				style={{ width: "37.5%" }}
				placeholder={"e.g. " + props.right}
			/>
		</div>
	);
};

const Mint = () => {
	return (
		<BaseScreen>
			<Wrapper>
				<Left></Left>
				<Center>
					<h2 className="prm-txt-clr">Mint a new NFT</h2>
					<MintWrapper>
						<MintButton>
							<MintImg src={SingleIcon} alt="single" />
							<MintLabel>Single</MintLabel>
						</MintButton>
						<MintButton>
							<MintImg src={MultipleIcon} alt="multiple" />
							<MintLabel>Multiple</MintLabel>
						</MintButton>
					</MintWrapper>
					<p
						style={{
							color: "rgba(174,174,178,1)",
						}}
					>
						Choose "Single" if you want your collectible to be one
						of a kind, or "Multiple" if you want to sell one
						collectible multiple times.
					</p>
					<FileWrapper>
						<div>
							<p style={{ fontWeight: 600 }}>
								PNG, GIF, WEBP, MP4, or MP3.
							</p>
							<p style={{ fontWeight: 600, fontSize: "15px" }}>
								Max 30mb.
							</p>
							<FileButton>Choose File</FileButton>
						</div>
					</FileWrapper>
					<div>
						<PrimaryInput placeholder="Name your NFT" />
						<PrimaryTextArea
							placeholder="Give your NFT a description. (Optional)"
							rows="4"
						/>
					</div>
					<div style={{ margin: "40px 0px" }}>
						<SwitchContent
							heading="Put on sale"
							description="You'll receive bids on this item"
							onClick={() => {
								console.log("Clicked content");
							}}
						/>
						<SwitchContent
							heading="Unlockable Content"
							description="Content will be unlocked after a successful transaction"
							onClick={() => {
								console.log("Clicked content");
							}}
						/>
					</div>
					<div style={{ margin: "40px 0px" }}>
						<div>
							<h3
								className="prm-txt-clr"
								style={{ margin: "5px 0px" }}
							>
								Royalties
							</h3>
							<div
								style={{ display: "flex", marginBottom: "0px" }}
							>
								<Input
									style={{
										width: "75px",
										paddingRight: "50px",
									}}
									placeholder="10"
								/>
								<h3
									style={{
										marginLeft: "-30px",
										textColor: "rgba(174,174,178,1)",
										fontWeight: "600",
									}}
								>
									%
								</h3>
							</div>
							<p style={{ margin: "0px" }}>
								Suggested: 10%, 20%, 30%
							</p>
						</div>
						<PropertyContainer>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<h3
									style={{ margin: "0px" }}
									className="prm-txt-clr"
								>
									Properties
								</h3>
								<p style={{ margin: "0px" }}>(Optional)</p>
							</div>
							<div>
								<PropertyContent left="Size" right="Medium" />
							</div>
							<p
								style={{
									fontWeight: "600",
									borderRadius: "20px",
									backgroundColor:
										"rgba(235, 235, 245, 0.18)",
									padding: "10px",
									width: "50%",
									textAlign: "center",
									cursor: "pointer",
								}}
								className="prm-txt-clr"
							>
								+ Add another property
							</p>
						</PropertyContainer>
					</div>
					<div style={{ paddingBottom: "40px", cursor: "pointer" }}>
						<p
							style={{
								color: "rgba(27,40,69,1)",
								padding: "10px 50px",
								borderRadius: "20px",
								width: "200px",
								textAlign: "center",
								fontWeight: "600",
							}}
							className="prm-bg-clr"
						>
							Mint NFT
						</p>
					</div>
				</Center>
				<Right>
					<RightBorder />
					<h3 style={{ color: "white", marginLeft: "40px" }}>
						Preview
					</h3>
					<Preview>
						<p>Preview of your NFT</p>
					</Preview>
				</Right>
			</Wrapper>
		</BaseScreen>
	);
};

export default Mint;
