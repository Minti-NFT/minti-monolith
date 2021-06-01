import SwitchComponents from "../../styles/components/Mint/Switch";

const Switcher = () => {
	return (
		<SwitchComponents.Container>
			<SwitchComponents.Input
				type="checkbox"
				onClick={(e) => {
					e.checked = !e.checked;
				}}
			/>
			<SwitchComponents.Slider class="slider round"></SwitchComponents.Slider>
		</SwitchComponents.Container>
	);
};

const Switch = (props) => {
	return (
		<SwitchComponents.Wrapper>
			<div>
				<SwitchComponents.Heading className="prm-txt-clr">
					{props.heading}
				</SwitchComponents.Heading>
				<SwitchComponents.Description>
					{props.description}
				</SwitchComponents.Description>
			</div>
			<div onClick={props.onClick}>
				<Switcher />
			</div>
		</SwitchComponents.Wrapper>
	);
};

export default Switch;
