import BaseScreen from "./BaseScreen";

import InstagramLogo from "../assets/Icons-svg/Instagram/IG-Light grey 2.svg";
import WebLinkLogo from "../assets/Icons-svg/Weblink/Website-Light grey 2.svg";

import TrophyButton from "../assets/Icons-svg/Trophy/Trophy-Button.svg";

import Copy from "../assets/Icons-svg/Copy link/Dark mode-Copy link.svg";
import Share from "../assets/Icons-svg/Share/Share-Nav bar light.svg";

import NavEl from "../components/Account/NavEl";
import GalleryEl from "../components/Account/GalleryEl";

import AccountComponents from "../styles/screens/Account";

const Account = () => {
	return (
		<BaseScreen>
			<div className="info">
				<AccountComponents.Banner />
				<AccountComponents.PPContainer className="profile-picture">
					<AccountComponents.PPInner />
				</AccountComponents.PPContainer>
				<AccountComponents.Username>
					NFTMaker
				</AccountComponents.Username>
				<AccountComponents.InfoContainer>
					<AccountComponents.AddressContainer>
						<p>0x97a57e504f8d...443b</p>
						<AccountComponents.CopyImage src={Copy} alt="copy" />
					</AccountComponents.AddressContainer>
				</AccountComponents.InfoContainer>
				<AccountComponents.Description>
					Short description/bio. Lorem ipsum dolor sit amet, consect
					etur adipiscing elit. Amet lobortis sapien sl, venenatis
					egestas.
				</AccountComponents.Description>
				<AccountComponents.SocialContainer>
					<AccountComponents.SocialElementContainer>
						<img src={InstagramLogo} alt="Instagram" />
						<AccountComponents.SocialElementText>
							nftmaker
						</AccountComponents.SocialElementText>
					</AccountComponents.SocialElementContainer>
					<AccountComponents.SocialElementContainer>
						<img src={WebLinkLogo} alt="website" />
						<AccountComponents.SocialElementText>
							nftmaker.com
						</AccountComponents.SocialElementText>
					</AccountComponents.SocialElementContainer>
				</AccountComponents.SocialContainer>
				<AccountComponents.ActionContainer>
					<AccountComponents.TrophyCaseButton>
						<AccountComponents.TrophyCaseImage
							src={TrophyButton}
							alt="Trophycase"
						/>
						<p>Trophycase</p>
					</AccountComponents.TrophyCaseButton>
					<AccountComponents.EditProfileButton>
						<p>Edit profile</p>
					</AccountComponents.EditProfileButton>
					<AccountComponents.ShareButton>
						<img src={Share} alt="Share" />
					</AccountComponents.ShareButton>
				</AccountComponents.ActionContainer>
			</div>

			<div className="gallery">
				<AccountComponents.GalleryNavContainer>
					<AccountComponents.GalleryNav>
						<NavEl name="Owned" active />
						<NavEl name="Minted" />
						<NavEl name="On sale" />
						<NavEl name="Saved" />
					</AccountComponents.GalleryNav>
				</AccountComponents.GalleryNavContainer>
				<AccountComponents.GalleryElContainer>
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
				</AccountComponents.GalleryElContainer>
			</div>
		</BaseScreen>
	);
};

export default Account;
