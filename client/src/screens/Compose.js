import styled from "styled-components";

import BaseScreen from "./BaseScreen";

import ig from "../assets/Icons-svg/Instagram/IG-Light grey 2.svg";

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

const ActionWrapper = styled.div`
	border: 3px dashed rgba(142, 142, 147, 1);
	border-radius: 8px;
	padding: 40px 60px;
	text-align: center;
	color: rgba(174, 174, 178, 1);
	background: transparent;
	flex: 1 1 0px;
`;

const ActionButton = styled.div`
	font-weight: 600;
	color: rgba(147, 233, 190, 1);
	background-color: rgba(235, 235, 245, 0.18);
	border-radius: 30px;
	padding: 15px;
	cursor: pointer;
`;

const PrimaryTextArea = styled.textarea`
	background-color: rgba(60, 60, 67, 0.6);
	border-radius: 8px;
	height: 54px;
	min-height: 54px;
	border: none;
	font-weight: 600;
	padding: 20px;
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

const PrimaryLabel = styled.h3`
	color: #93e9be;
	margin-bottom: 5px;
`;
const PostToContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	border-radius: 8px;
	background-color: rgba(60, 60, 67, 0.6);
	padding: 20px;
	margin: 5px 0px;
	max-width: calc(100% - 25px);
	height: 50px;
	overflow-y: auto;
`;

const PostToElement = (props) => {
	return (
		<div
			style={{
				backgroundColor: props.primaryColor,
				margin: "5px",
				padding: "2px 20px",
				display: "flex",
				alignItems: "center",
				height: "40px",
				borderRadius: "20px",
				width: "150px",
				color: "#1B2845",
				justifyContent: "space-between",
				fontWeight: "600",
			}}
		>
			<div style={{ display: "flex" }}>
				<img src={props.img} alt={props.name} />
				<p>{props.name}</p>
			</div>
			<p>X</p>
		</div>
	);
};

const Mint = () => {
	return (
		<BaseScreen>
			<Wrapper>
				<Left></Left>
				<Center>
					<h1 style={{ color: "#F2F2F7", marginBottom: "30px" }}>
						Compose a new post
					</h1>

					<div>
						<PrimaryLabel>Post to</PrimaryLabel>
						<PostToContainer>
							<div
								style={{
									width: "85%",
									display: "flex",
									cursor: "pointer",
								}}
							>
								<PostToElement
									name="nftmaker"
									primaryColor="#FCB07E"
									img={ig}
								/>
							</div>
							<div style={{}}>
								<div
									style={{
										marginTop: "10px",
										height: "35px",
										width: "35px",
										borderRadius: "50%",
										backgroundColor:
											"rgba(235, 235, 245, 0.18)",
										fontWeight: "600",
										color: "#93E9BE",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<h3>+</h3>
								</div>
							</div>
						</PostToContainer>
					</div>
					<div style={{ marginTop: "30px" }}>
						<PrimaryLabel>Text</PrimaryLabel>
						<PrimaryTextArea
							placeholder="Type your post here..."
							rows="4"
						/>
					</div>
					<div style={{ marginTop: "30px" }}>
						<PrimaryLabel>Media</PrimaryLabel>
						<p
							style={{
								color: "rgba(174,174,178,1)",
							}}
						>
							Only NFTs with file type PNG, JPG, JPEG, and MP4 can
							be posted to Instagram.
						</p>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<ActionWrapper style={{ marginRight: "10px" }}>
								<ActionButton>Select NFT</ActionButton>
							</ActionWrapper>
							<ActionWrapper style={{ marginLeft: "10px" }}>
								<ActionButton
									style={{
										backgroundColor: "#93E9BE",
										color: "#1B2845",
									}}
								>
									Mint a new NFT
								</ActionButton>
							</ActionWrapper>
						</div>
					</div>
					<div style={{ display: "flex", marginTop: "20px" }}>
						<div
							style={{
								paddingBottom: "40px",
								cursor: "pointer",
								marginRight: "10px",
							}}
						>
							<p
								style={{
									backgroundColor:
										"rgba(235, 235, 245, 0.18)",
									padding: "15px 50px",
									borderRadius: "30px",
									width: "200px",
									textAlign: "center",
									fontWeight: "600",
								}}
								className="prm-txt-clr"
							>
								Save draft
							</p>
						</div>
						<div
							style={{
								paddingBottom: "40px",
								cursor: "pointer",
								marginLeft: "10px",
							}}
						>
							<p
								style={{
									backgroundColor: "#8E8E93",
									color: "#636366",
									padding: "15px 50px",
									borderRadius: "30px",
									width: "200px",
									textAlign: "center",
									fontWeight: "600",
								}}
								className="prm-bg-clr"
							>
								Post
							</p>
						</div>
					</div>
				</Center>
				<Right>
					<RightBorder />
					<h3 style={{ color: "white", marginLeft: "40px" }}>
						Preview
					</h3>
					<Preview>
						<p>Preview of your Post</p>
					</Preview>
				</Right>
			</Wrapper>
		</BaseScreen>
	);
};

export default Mint;
