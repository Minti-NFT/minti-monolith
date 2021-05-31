import styled from "styled-components";

const ButtonContainer = styled.div`
	border-radius: 36px;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 5px 20px;
	font-weight: 600;
	cursor: pointer;
`;

const components = {
	Banner: styled.div`
		background-color: #93e9be;
		width: 100%;
		height: 200px;
	`,

	PPContainer: styled.div`
		width: 150px;
		height: 150px;
		border-radius: 50%;
		margin: auto;
		margin-top: -75px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #1c1c1e;
	`,

	PPInner: styled.div`
		background-color: #93e9be;
		position: relative;
		height: 90%;
		width: 90%;
		border-radius: 50%;
	`,

	Username: styled.h2`
		color: white;
		text-align: center;
		font-size: 250%;
		margin-top: 10px;
		margin-bottom: 0px;
	`,

	InfoContainer: styled.div`
		margin: auto;
		width: 200px;
		font-size: 90%;
	`,

	AddressContainer: styled.div`
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #ababab;
		font-weight: 600;
		margin-top: -5px;
		margin-bottom: 10px;
	`,

	CopyImage: styled.img`
		cursor: pointer;
	`,

	Description: styled.p`
		width: 500px;
		color: #f2f2f7;
		margin: auto;
	`,

	SocialContainer: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px;
		cursor: pointer;
	`,

	SocialElementContainer: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px;
		cursor: pointer;
	`,

	SocialElementText: styled.p`
		color: #f2f2f7;
		font-weight: 600;
		margin-left: 5px;
		margin-top: 0px;
		margin-bottom: 0px;
	`,

	ActionContainer: styled.div`
		height: 36px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 350px;
		margin: auto;
		padding: 20px 0px;
	`,

	TrophyCaseButton: styled(ButtonContainer)`
		justify-content: space-between;
		color: #1b2845;
		background: linear-gradient(
				154.04deg,
				#ffffff -27.56%,
				rgba(255, 255, 255, 0) 81.94%
			),
			radial-gradient(
				99.9% 225.32% at 82.94% 125%,
				#53cef4 0%,
				rgba(255, 255, 255, 0) 100%
			),
			linear-gradient(264.51deg, #b7ffdb 2.53%, #93e9be 96.02%);
	`,

	TrophyCaseImage: styled.img`
		margin-right: 5px;
	`,

	EditProfileButton: styled(ButtonContainer)`
		color: #93e9be;
		background-color: rgba(60, 60, 67, 0.6);
	`,

	ShareButton: styled.div`
		height: 100%;
		width: 36px;
		border-radius: 50%;
		background-color: rgba(60, 60, 67, 0.6);
		padding: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	`,

	GalleryNavContainer: styled.div`
		margin-bottom: 30px;
	`,

	GalleryNav: styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 500px;
		margin: auto;
		font-weight: 600;
	`,

	GalleryElContainer: styled.div`
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	`,
};

export default components;
