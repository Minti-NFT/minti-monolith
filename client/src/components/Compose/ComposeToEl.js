import ComposeToElComponents from "../../styles/components/Compose/ComposeToEl";

const ComposeToEl = (props) => {
	return (
		<ComposeToElComponents.Wrapper primaryColor={props.primaryColor}>
			<ComposeToElComponents.Container>
				<img src={props.img} alt={props.name} />
				<p>{props.name}</p>
			</ComposeToElComponents.Container>
			<p>X</p>
		</ComposeToElComponents.Wrapper>
	);
};

export default ComposeToEl;
