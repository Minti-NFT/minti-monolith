import BaseScreen from "./BaseScreen";
import MintComponents from "../styles/screens/Mint";
import Switch from "../components/Mint/Switch";
import PropertyComponents from "../styles/components/Mint/Property";

import SingleIcon from "../assets/Mint NFT/Dark mode-Single NFT.png";
import MultipleIcon from "../assets/Mint NFT/Dark mode-Multiple NFT.png";

const PropertyContent = (props) => {
	return (
		<PropertyComponents.Wrapper>
			<PropertyComponents.Input placeholder={"e.g. " + props.left} />
			<PropertyComponents.Input placeholder={"e.g. " + props.right} />
		</PropertyComponents.Wrapper>
	);
};

const Mint = () => {
	return (
		<BaseScreen>
			<MintComponents.Wrapper>
				<MintComponents.Left />
				<MintComponents.Center>
					<h2 className="prm-txt-clr">Mint a new NFT</h2>
					<MintComponents.MintWrapper>
						<MintComponents.MintButton>
							<MintComponents.MintImg
								src={SingleIcon}
								alt="single"
							/>
							<MintComponents.MintLabel>
								Single
							</MintComponents.MintLabel>
						</MintComponents.MintButton>
						<MintComponents.MintButton>
							<MintComponents.MintImg
								src={MultipleIcon}
								alt="multiple"
							/>
							<MintComponents.MintLabel>
								Multiple
							</MintComponents.MintLabel>
						</MintComponents.MintButton>
					</MintComponents.MintWrapper>
					<p
						style={{
							color: "rgba(174,174,178,1)",
						}}
					>
						Choose "Single" if you want your collectible to be one
						of a kind, or "Multiple" if you want to sell one
						collectible multiple times.
					</p>
					<MintComponents.FileWrapper>
						<div>
							<p style={{ fontWeight: 600 }}>
								PNG, GIF, WEBP, MP4, or MP3.
							</p>
							<p style={{ fontWeight: 600, fontSize: "15px" }}>
								Max 30mb.
							</p>
							<MintComponents.FileButton>
								Choose File
							</MintComponents.FileButton>
						</div>
					</MintComponents.FileWrapper>
					<div>
						<MintComponents.PrimaryInput placeholder="Name your NFT" />
						<MintComponents.PrimaryTextArea
							placeholder="Give your NFT a description. (Optional)"
							rows="4"
						/>
					</div>
					<div style={{ margin: "40px 0px" }}>
						<Switch
							heading="Put on sale"
							description="You'll receive bids on this item"
							onClick={() => {
								console.log("Clicked content");
							}}
						/>
						<Switch
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
								<MintComponents.Input
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
						<MintComponents.PropertyContainer>
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
									Attributes
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
						</MintComponents.PropertyContainer>
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
				</MintComponents.Center>
				<MintComponents.Right>
					<MintComponents.RightBorder />
					<h3 style={{ color: "white", marginLeft: "40px" }}>
						Preview
					</h3>
					<MintComponents.Preview>
						<p>Preview of your NFT</p>
					</MintComponents.Preview>
				</MintComponents.Right>
			</MintComponents.Wrapper>
		</BaseScreen>
	);
};

export default Mint;
