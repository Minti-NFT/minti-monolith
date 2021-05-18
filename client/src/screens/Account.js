import styled from "styled-components";

import BaseScreen from "./BaseScreen";

import InstagramLogo from "../assets/Icons-svg/Instagram/IG-Light grey 2.svg";
import WebLinkLogo from "../assets/Icons-svg/Weblink/Website-Light grey 2.svg";

import SavedInactive from "../assets/Icons-svg/Save/Saved-Nav bar light.svg";
import SavedActive from "../assets/Icons-svg/Save/Saved-Brand primary.svg";

import TrophyButton from "../assets/Icons-svg/Trophy/Trophy-Button.svg";

import Copy from "../assets/Icons-svg/Copy link/Dark mode-Copy link.svg";
import Share from "../assets/Icons-svg/Share/Share-Nav bar light.svg";

const NavEl = (props) => {
	return (
		<div style={{ position: "relative" }}>
			<p
				style={{
					color: props.active ? "#93E9BE" : "#AEAEB2",
					marginBottom: "5px",
				}}
			>
				{props.name}
			</p>
			<div
				style={{
					position: "absolute",
					left: "50%",
				}}
			>
				<div
					style={{
						position: "relative",
						width: "40px",
						height: "2.5px",
						left: "-50%",
						backgroundColor: "#93E9BE",
						display: props.active ? "" : "none",
					}}
				></div>
			</div>
		</div>
	);
};

const GalleryEl = (props) => {
	return (
		<div
			style={{
				borderRadius: "12px",
				border: "1px solid #3A3A3C",
				padding: "10px",
				margin: "1%",
			}}
		>
			<div>
				<img
					src={props.src}
					alt={props.name}
					style={{ height: "230px", width: "230px" }}
				/>
			</div>
			<div>
				<h3
					style={{
						color: "#F2F2F7",
						marginTop: "10px",
						marginBottom: "5px",
						padding: "0px",
					}}
				>
					{props.name}
				</h3>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<div style={{ display: "flex", alignItems: "center" }}>
						<p
							style={{
								color: "#93E9BE",
								fontWeight: "600",
								margin: "0px",
								marginRight: "10px",
							}}
						>
							{props.price}
						</p>
						<p style={{ color: "#8E8E93", margin: "0px" }}>
							{props.stock} of {props.quantity}
						</p>
					</div>
					<div>
						<img
							src={props.saved ? SavedActive : SavedInactive}
							alt="save"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const Account = () => {
	return (
		<BaseScreen>
			<div className="info">
				<div
					className="banner"
					style={{
						backgroundColor: "#93E9BE",
						width: "100%",
						height: "200px",
					}}
				></div>
				<div
					className="profile-picture"
					style={{
						width: "150px",
						height: "150px",
						borderRadius: "50%",
						margin: "auto",
						marginTop: "-75px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#1C1C1E",
					}}
				>
					<div
						style={{
							backgroundColor: "#93E9BE",
							position: "relative",
							height: "95%",
							width: "95%",
							borderRadius: "50%",
						}}
					></div>
				</div>
				<h2
					style={{
						color: "white",
						textAlign: "center",
						fontSize: "250%",
						marginTop: "10px",
						marginBottom: "0px",
					}}
				>
					NFTMaker
				</h2>
				<div
					style={{
						margin: "auto",
						width: "200px",
						fontSize: "90%",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
							color: "#ABABAB",
							textAlign: "center",
							fontWeight: "600",
							marginTop: "-5px",
							marginBottom: "10px",
						}}
					>
						<p>0x97a57e504f8d...443b</p>
						<img src={Copy} alt="copy" />
					</div>
				</div>
				<p style={{ width: "500px", color: "#F2F2F7", margin: "auto" }}>
					Short description/bio. Lorem ipsum dolor sit amet, consect
					etur adipiscing elit. Amet lobortis sapien sl, venenatis
					egestas.
				</p>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginLeft: "10px",
							marginRight: "10px",
						}}
					>
						<img src={InstagramLogo} alt="Instagram" />
						<p
							style={{
								color: "#F2F2F7",
								fontWeight: "600",
								marginLeft: "5px",
							}}
						>
							nftmaker
						</p>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginLeft: "10px",
							marginRight: "10px",
						}}
					>
						<img src={WebLinkLogo} alt="website" />
						<p
							style={{
								color: "#F2F2F7",
								fontWeight: "600",
								marginLeft: "5px",
							}}
						>
							nftmaker.com
						</p>
					</div>
				</div>
				<div
					style={{
						height: "36px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "350px",
						margin: "auto",
						padding: "20px 0px",
					}}
				>
					<div
						style={{
							borderRadius: "36px",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							color: "#1B2845",
							padding: "5px 20px",
							fontWeight: "600",
							background:
								"linear-gradient(154.04deg, #FFFFFF -27.56%, rgba(255, 255, 255, 0) 81.94%), radial-gradient(99.9% 225.32% at 82.94% 125%, #53CEF4 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(264.51deg, #B7FFDB 2.53%, #93E9BE 96.02%)",
						}}
					>
						<img
							src={TrophyButton}
							alt="Trophycase"
							style={{ marginRight: "5px" }}
						/>
						<p>Trophycase</p>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "36px",
							height: "100%",
							color: "#93E9BE",
							padding: "5px 20px",
							fontWeight: "600",
							backgroundColor: "rgba(60, 60, 67, 0.6)",
						}}
					>
						<p>Edit profile</p>
					</div>
					<div
						style={{
							height: "100%",
							width: "36px",
							borderRadius: "50%",
							backgroundColor: "rgba(60, 60, 67, 0.6)",
							padding: "5px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<img src={Share} alt="Share" />
					</div>
				</div>
			</div>

			<div className="gallery">
				<div style={{ marginBottom: "30px" }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "500px",
							margin: "auto",
							fontWeight: "600",
						}}
					>
						<NavEl name="Owned" active />
						<NavEl name="Minted" />
						<NavEl name="On sale" />
						<NavEl name="Saved" />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						flexWrap: "wrap",
					}}
				>
					<GalleryEl
						name={"NFT Name"}
						price={"Not for sale"}
						stock={1}
						quantity={1}
						saved
						src={
							"https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlcyUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
						}
					/>

					{[...Array(100)].map((el, i) => (
						<GalleryEl
							key={i}
							name={"NFT Name"}
							price={"Not for sale"}
							stock={1}
							quantity={1}
							src={
								"https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlcyUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
							}
						/>
					))}
				</div>
			</div>
		</BaseScreen>
	);
};

export default Account;
