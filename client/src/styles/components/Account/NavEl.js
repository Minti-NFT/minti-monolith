import styled from "styled-components";

const components = {
	Wrapper: styled.div`
		position: relative;
	`,

	Text: styled.p`
		color: ${(props) => (props.active ? "#93E9BE" : "AEAEB2")};
		margin-bottom: 5px;
		cursor: pointer;
	`,

	BarContainer: styled.div`
		position: absolute;
		left: 50%;
		height: 2.5px;
	`,

	Bar: styled.div`
		position: relative;
		width: 40px;
		height: 2.5px;
		left: -50%;
		background-color: #93e9be;
		display: ${(props) => (props.active ? "" : "none")};
	`,
};

export default components;
