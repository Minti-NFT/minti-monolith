import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { Tooltip } from "reactstrap";

import AppLogo from "../assets/Logos/Logo_App Icon.png";
import TextLogo from "../assets/Logos/Minti logo_Logo-Brand Primary.png";

import SearchIcon from "../assets/Icons-svg/Search/Search-Dark grey.svg";
import MintIcon from "../assets/Icons-svg/Minti logo/Dark mode-Logo-Nav bar light.svg";
import ComposeIcon from "../assets/Icons-svg/Compose/Dark mode-Compose-Nav bar light.svg";
import TrophyIcon from "../assets/Icons-svg/Trophy/Dark mode-Trophy-Nav bar light.svg";

import MintActiveIcon from "../assets/Icons-svg/Minti logo/Dark mode-Logo-Brand primary.svg";
import ComposeActiveIcon from "../assets/Icons-svg/Compose/Dark mode-Compose-Brand primary.svg";
import TrophyActiveIcon from "../assets/Icons-svg/Trophy/Dark mode-Trophy-Brand primary.svg";

import MintHoverIcon from "../assets/Icons-svg/Minti logo/Dark mode-Logo-Brand primary.svg";
import ComposeHoverIcon from "../assets/Icons-svg/Compose/Dark mode-Compose-Brand primary.svg";
import TrophyHoverIcon from "../assets/Icons-svg/Trophy/Dark mode-Trophy-Brand primary.svg";

const Wrapper = styled.section`
	border-bottom: 1px solid rgba(80, 85, 92, 1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 24px;
	height: 50px;
`;

const FlexedContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const TextContainer = styled.img`
	height: calc(48px * 0.85);

	@media (max-width: 600px) {
		display: none;
	}
`;

const IconContainer = styled.img`
	height: calc(50px * 0.85);
`;

const SearchContainer = styled(FlexedContainer)`
	margin-left: 48px;
	border-radius: calc(24px * 1);
	padding: 0px 10px;

	@media (max-width: 600px) {
		margin-left: 10px;
	}
`;

const Search = styled.input`
	background: transparent;
	border-width: 0px;
	border: none;
	color: rgba(142, 142, 147, 1);
	font-size: 20px;
	font-weight: 600;
	margin-left: 10px;
	padding: 10px 0px;
	:focus {
		outline: none;
	}
`;

const RightContainer = styled(FlexedContainer)``;

const RightContent = styled(FlexedContainer)`
	height: calc(48px * 1);
	min-width: calc(48px * 1);
	border-radius: calc(24px * 1);
	margin: 0px 7.5px;
	:active,
	:visited,
	:hover {
		text-decoration: none;
	}
`;

const TrophyCase = styled(RightContent)`
	font-weight: 600;
	padding: 0px 20px;
`;

const Element = (props) => {
	const [hovered, setHovered] = useState(false);
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const [icon, setIcon] = useState(props.idleIcon);

	const toggle = () => setTooltipOpen(!tooltipOpen);

	const ElementText = styled.p`
		font-weight: 600;
		padding-left: 5px;
		@media (max-width: 600px) {
			display: none;
		}
	`;
	return (
		<div>
			<Link to={props.path} style={{ textDecoration: "none" }}>
				<RightContent
					className="mint dk-foreground"
					onMouseEnter={() => {
						setHovered(true);
						//setIcon(props.hoverIcon);
					}}
					onMouseLeave={() => {
						setHovered(false);
						//setIcon(props.idleIcon);
					}}
				>
					<div
						id={props.name}
						style={{
							display: "flex",
							backgroundColor: "transparent",
							transition: "all 0.2s",
							padding: props.active || hovered ? "0px 15px" : "",
						}}
					>
						<img
							src={props.active ? props.activeIcon : icon}
							alt={props.name + " Icon"}
						/>
						{props.active ? (
							<ElementText className={"prm-txt-clr"}>
								{props.name}
							</ElementText>
						) : null}
					</div>
				</RightContent>
			</Link>

			<Tooltip
				placement="bottom"
				isOpen={tooltipOpen}
				target={props.name}
				toggle={toggle}
				style={{
					display: props.active ? "none" : "",
					backgroundColor: "#2C2C2E",
					borderRadius: "8px",
					color: "#F2F2F7",
					padding: "5px 10px",
					marginTop: "20px",
					transition: "all 0s",
				}}
			>
				{props.name}
			</Tooltip>
		</div>
	);
};

const Navs = [
	{
		name: "Mint",
		path: "/mint",
		activeIcon: MintActiveIcon,
		hoverIcon: MintHoverIcon,
		idleIcon: MintIcon,
	},
	{
		name: "Compose",
		path: "/compose",
		activeIcon: ComposeActiveIcon,
		hoverIcon: ComposeHoverIcon,
		idleIcon: ComposeIcon,
	},
	{
		name: "Trophycases",
		path: "/case",
		activeIcon: TrophyActiveIcon,
		hoverIcon: TrophyHoverIcon,
		idleIcon: TrophyIcon,
	},
];

const Topbar = () => {
	const location = useLocation();
	return (
		<Wrapper className="dk-wrapper">
			<FlexedContainer>
				<FlexedContainer>
					<IconContainer src={AppLogo} alt="Logo" />
					<TextContainer src={TextLogo} alt="Minti" />
				</FlexedContainer>

				<SearchContainer className="dk-foreground">
					<img src={SearchIcon} alt="Search Icon" />
					<Search type="search" placeholder="Search Minti"></Search>
				</SearchContainer>
			</FlexedContainer>

			<RightContainer>
				{Navs
					? Navs.map((el, idx) => {
							return (
								<Element
									className=""
									active={location.pathname === el.path}
									key={idx}
									path={el.path}
									name={el.name}
									activeIcon={el.activeIcon}
									idleIcon={el.idleIcon}
								/>
							);
					  })
					: null}
				{/*
				<RightContent className="mint dk-foreground">
					<img src={MintIcon} alt="Mint Icon" />
				</RightContent>
				<RightContent className="draft dk-foreground">
					<img src={ComposeIcon} alt="Compose Icon" />
				</RightContent>
				<TrophyCase className="trophycases dk-foreground prm-txt-clr">
					<img
						src={TrophyIcon}
						alt="Trophy Icon"
						style={{ marginRight: "5px" }}
					/>
					<p>Trophycases</p>
				</TrophyCase>
				*/}
				<RightContent className="profile dk-foreground"></RightContent>
			</RightContainer>
		</Wrapper>
	);
};

export default Topbar;
