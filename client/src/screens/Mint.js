import { useEffect, useState } from "react";

import BaseScreen from "./BaseScreen";
import MintComponents from "../styles/screens/Mint";
import Switch from "../components/Mint/Switch";
import PropertyComponents from "../styles/components/Mint/Property";

import SingleIcon from "../assets/Mint NFT/Dark mode-Single NFT.png";
import MultipleIcon from "../assets/Mint NFT/Dark mode-Multiple NFT.png";

import connectMetamask from "../comms/wallet/metamask";

const PropertyContent = (props) => {
	return (
		<PropertyComponents.Wrapper>
			<PropertyComponents.Input
				placeholder={"e.g. Size"}
				value={props.left}
				onChange={(e) => {
					let attribs = [...props.mintingAsset.attributes];
					attribs[props.idx].name = e.target.value;
					console.log(attribs);
					props.setMintingAsset({
						...props.mintingAsset,
						attributes: attribs,
					});
				}}
			/>
			<PropertyComponents.Input
				placeholder={"e.g. Medium"}
				value={props.right}
				onChange={(e) => {
					let attribs = [...props.mintingAsset.attributes];
					attribs[props.idx].value = e.target.value;
					props.setMintingAsset({
						...props.mintingAsset,
						attributes: attribs,
					});
				}}
			/>
			<div
				style={{
					fontWeight: 600,
					color: "rgb(245, 66, 66)",
					cursor: "pointer",
				}}
				onClick={() => {
					console.log(props.mintingAsset.attributes);
					props.setMintingAsset({
						...props.mintingAsset,
						attributes: [...props.mintingAsset.attributes].splice(
							props.idx - 1,
							1
						),
					});
				}}
			>
				<h2>-</h2>
			</div>
		</PropertyComponents.Wrapper>
	);
};

const Mint = () => {
	const [mintingAsset, setMintingAsset] = useState({
		assetType: "SINGLE",
		name: "",
		description: "",
		onSale: false,
		unlockableContent: false,
		royalties: null,
		attributes: [
			{
				name: "",
				value: "",
			},
		],
	});

	useEffect(() => {
		async function exec() {
			const res = await connectMetamask();
			if (res === false) {
				window.location.href = "/connect";
			}
		}

		exec();
	}, []);

	useEffect(() => {
		console.log(mintingAsset);
	}, [mintingAsset]);

	return (
		<BaseScreen>
			<MintComponents.Wrapper>
				<MintComponents.Left />
				<MintComponents.Center>
					<h2 className="prm-txt-clr">Mint a new NFT</h2>
					<MintComponents.MintWrapper>
						<MintComponents.MintButton
							active={mintingAsset.assetType === "SINGLE"}
							onClick={() => {
								setMintingAsset({
									...mintingAsset,
									assetType: "SINGLE",
								});
							}}
						>
							<MintComponents.MintImg
								src={SingleIcon}
								alt="single"
							/>
							<MintComponents.MintLabel>
								Single
							</MintComponents.MintLabel>
						</MintComponents.MintButton>
						<MintComponents.MintButton
							active={mintingAsset.assetType === "MULTIPLE"}
							onClick={() => {
								setMintingAsset({
									...mintingAsset,
									assetType: "MULTIPLE",
								});
							}}
						>
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
						<MintComponents.PrimaryInput
							placeholder="Name your NFT"
							onChange={(e) => {
								setMintingAsset({
									...mintingAsset,
									name: e.target.value,
								});
							}}
						/>
						<MintComponents.PrimaryTextArea
							placeholder="Give your NFT a description. (Optional)"
							rows="4"
							onChange={(e) => {
								setMintingAsset({
									...mintingAsset,
									description: e.target.value,
								});
							}}
						/>
					</div>
					<div style={{ margin: "40px 0px" }}>
						<Switch
							heading="Put on sale"
							description="You'll receive bids on this item"
							onClick={(e) => {
								setMintingAsset({
									...mintingAsset,
									onSale: e.target.checked,
								});
							}}
						/>
						<Switch
							heading="Unlockable Content"
							description="Content will be unlocked after a successful transaction"
							onClick={(e) => {
								setMintingAsset({
									...mintingAsset,
									unlockableContent: e.target.checked,
								});
							}}
						/>
					</div>
					<div style={{ margin: "40px 0px" }}>
						<MintComponents.PropertyContainer
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<div>
								<h3
									className="prm-txt-clr"
									style={{ margin: "5px 0px" }}
								>
									Royalties
								</h3>
								<div
									style={{
										display: "flex",
										marginBottom: "0px",
									}}
								>
									<MintComponents.Input
										type="number"
										style={{
											width: "75px",
											paddingRight: "50px",
										}}
										placeholder={10}
										onChange={(e) => {
											setMintingAsset({
												...mintingAsset,
												royalties: e.target.value,
											});
										}}
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

							<div
								style={{
									display:
										mintingAsset.assetType === "MULTIPLE"
											? ""
											: "none",
								}}
							>
								<h3
									className="prm-txt-clr"
									style={{ margin: "5px 0px" }}
								>
									Number of Copies
								</h3>
								<div
									style={{
										display: "flex",
										marginBottom: "0px",
									}}
								>
									<MintComponents.Input
										type="number"
										style={{
											width: "75px",
											paddingRight: "50px",
										}}
										placeholder={10}
										onChange={(e) => {
											setMintingAsset({
												...mintingAsset,
												royalties: e.target.value,
											});
										}}
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
									Amount of assets created
								</p>
							</div>
						</MintComponents.PropertyContainer>
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
								{mintingAsset.attributes.map((el, idx) => {
									return (
										<PropertyContent
											left={el.name}
											right={el.value}
											key={idx}
											setMintingAsset={setMintingAsset}
											mintingAsset={mintingAsset}
											idx={idx}
										/>
									);
								})}
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
								onClick={() => {
									setMintingAsset({
										...mintingAsset,
										attributes: mintingAsset.attributes.concat(
											[
												{
													name: "",
													value: "",
												},
											]
										),
									});
								}}
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
