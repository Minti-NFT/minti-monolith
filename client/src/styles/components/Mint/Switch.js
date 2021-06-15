import styled from "styled-components";

const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.2s;
	transition: 0.2s;
	border-radius: 34px;

	:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.2s;
		transition: 0.2s;
		border-radius: 50%;
	}
`;

const components = {
	Container: styled.label`
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	`,

	Slider: Slider,

	Input: styled.input`
		opacity: 0;
		width: 0;
		height: 0;

		&:checked + ${Slider} {
			background-color: #80dae7;
		}

		&:focused + ${Slider} {
			box-shadow: 0 0 1px #80dae7;
		}

		&:checked + ${Slider}:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}
	`,

	Wrapper: styled.div`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20px 0px;
	`,

	Heading: styled.h3`
		margin: 5px 0px;
	`,

	Description: styled.p`
		color: rgba(229, 229, 234, 1);
		margin: 0;
		max-width: 70%;
	`,
};

export default components;
