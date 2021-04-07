import styled from "styled-components";

import AppLogo from "../assets/app-logo.svg";
import TextLogo from "../assets/green-minti-text.svg";

const Wrapper = styled.section`
	border-bottom: 1px solid grey;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 24px;
`;

const FlexedContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const TextSvgContainer = styled.img`
	height: calc(48px * 0.85);
`;

const IconSvgContainer = styled.img`
	height: calc(50px * 0.85);
`;

const SearchContainer = styled(FlexedContainer)`
	margin-left: 48px;
	border-radius: calc(24px * 1);
	padding: 0px 10px;
`;

const Search = styled.input`
	background: transparent;
	border-width: 0px;
	border: none;
	color: rgba(142, 142, 147, 1);
	font-size: 20px;
	font-weight: 600;
`;

const RightContainer = styled(FlexedContainer)``;

const RightContent = styled(FlexedContainer)`
	height: calc(48px * 1);
	min-width: calc(48px * 1);
	border-radius: calc(24px * 1);
	margin: 0px 7.5px;
`;

const TrophyCase = styled(RightContent)`
	font-weight: 600;
	padding: 0px 20px;
`;

const Topbar = () => {
	return (
		<Wrapper className="dk-wrapper">
			<FlexedContainer>
				<FlexedContainer>
					<div
						style={{
							backgroundColor: "#93e9be",
							borderRadius: "15px",
						}}
					>
						<IconSvgContainer src={AppLogo} alt="Logo" />
					</div>
					<TextSvgContainer src={TextLogo} alt="Minti" />
				</FlexedContainer>

				<SearchContainer className="dk-foreground">
					<p>Icon</p>
					<Search type="search" placeholder="Search Minti"></Search>
				</SearchContainer>
			</FlexedContainer>

			<RightContainer>
				<RightContent className="mint dk-foreground"></RightContent>
				<RightContent className="draft dk-foreground"></RightContent>
				<TrophyCase className="trophycases dk-foreground prm-txt-clr">
					<p>Trophycases</p>
				</TrophyCase>
				<RightContent className="profile dk-foreground"></RightContent>
			</RightContainer>
		</Wrapper>
	);
};

export default Topbar;
