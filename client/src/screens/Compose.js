import BaseScreen from "./BaseScreen";

import ComposeComponents from "../styles/screens/Compose";
import ComposeToEl from "../components/Compose/ComposeToEl";

import ig from "../assets/Icons-svg/Instagram/IG-Light grey 2.svg";

const Mint = () => {
	return (
		<BaseScreen>
			<ComposeComponents.Wrapper>
				<ComposeComponents.Left />
				<ComposeComponents.Center>
					<h1 style={{ color: "#F2F2F7", marginBottom: "30px" }}>
						Compose a new post
					</h1>

					<div>
						<ComposeComponents.PrimaryLabel>
							Post to
						</ComposeComponents.PrimaryLabel>
						<ComposeComponents.PostToContainer>
							<div
								style={{
									width: "85%",
									display: "flex",
									cursor: "pointer",
								}}
							>
								<ComposeToEl
									name="nftmaker"
									primaryColor="#FCB07E"
									img={ig}
								/>
							</div>
							<div>
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
						</ComposeComponents.PostToContainer>
					</div>
					<div style={{ marginTop: "30px" }}>
						<ComposeComponents.PrimaryLabel>
							Text
						</ComposeComponents.PrimaryLabel>
						<ComposeComponents.PrimaryTextArea
							placeholder="Type your post here..."
							rows="4"
						/>
					</div>
					<div style={{ marginTop: "30px" }}>
						<ComposeComponents.PrimaryLabel>
							Media
						</ComposeComponents.PrimaryLabel>
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
							<ComposeComponents.ActionWrapper
								style={{ marginRight: "10px" }}
							>
								<ComposeComponents.ActionButton>
									Select NFT
								</ComposeComponents.ActionButton>
							</ComposeComponents.ActionWrapper>
							<ComposeComponents.ActionWrapper
								style={{ marginLeft: "10px" }}
							>
								<ComposeComponents.ActionButton
									style={{
										backgroundColor: "#93E9BE",
										color: "#1B2845",
									}}
								>
									Mint a new NFT
								</ComposeComponents.ActionButton>
							</ComposeComponents.ActionWrapper>
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
				</ComposeComponents.Center>
				<ComposeComponents.Right>
					<ComposeComponents.RightBorder />
					<h3 style={{ color: "white", marginLeft: "40px" }}>
						Preview
					</h3>
					<ComposeComponents.Preview>
						<p>Preview of your Post</p>
					</ComposeComponents.Preview>
				</ComposeComponents.Right>
			</ComposeComponents.Wrapper>
		</BaseScreen>
	);
};

export default Mint;
