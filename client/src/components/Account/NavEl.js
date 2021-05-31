import NavElComponents from "../../styles/components/Account/NavEl";

const NavEl = (props) => {
	return (
		<NavElComponents.Wrapper>
			<NavElComponents.Text active={props.active}>
				{props.name}
			</NavElComponents.Text>
			<NavElComponents.BarContainer>
				<NavElComponents.Bar active={props.active} />
			</NavElComponents.BarContainer>
		</NavElComponents.Wrapper>
	);
};

export default NavEl;
