import ButtonComponents from "../../styles/components/Connect/Button";

const Button = (props) => {
	return (
		<ButtonComponents.ConnectionButton
			onClick={() => {
				props.onClick();
			}}
		>
			<ButtonComponents.ConnectionIcon src={props.src} />
			<ButtonComponents.ConnectionText>
				{props.name}
			</ButtonComponents.ConnectionText>
		</ButtonComponents.ConnectionButton>
	);
};

export default Button;
