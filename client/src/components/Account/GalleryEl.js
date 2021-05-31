import SavedInactive from "../../assets/Icons-svg/Save/Saved-Nav bar light.svg";
import SavedActive from "../../assets/Icons-svg/Save/Saved-Brand primary.svg";

import GalleryElComponents from "../../styles/components/Account/GalleryEl";

const GalleryEl = (props) => {
	return (
		<GalleryElComponents.Wrapper>
			<div>
				<GalleryElComponents.Image src={props.src} alt={props.name} />
			</div>
			<div>
				<GalleryElComponents.Heading>
					{props.name}
				</GalleryElComponents.Heading>
				<GalleryElComponents.InfoContainer>
					<GalleryElComponents.InnerInfoContainer>
						<GalleryElComponents.Price>
							{props.price}
						</GalleryElComponents.Price>
						<GalleryElComponents.Stock>
							{props.stock} of {props.quantity}
						</GalleryElComponents.Stock>
					</GalleryElComponents.InnerInfoContainer>
					<div>
						<img
							src={props.saved ? SavedActive : SavedInactive}
							alt="save"
						/>
					</div>
				</GalleryElComponents.InfoContainer>
			</div>
		</GalleryElComponents.Wrapper>
	);
};

export default GalleryEl;
