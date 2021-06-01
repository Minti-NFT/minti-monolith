import styled from "styled-components";

const components = {
	Wrapper: styled.div`
		background-color: ${(props) => props.primaryColor};
		margin: 5px;
		padding: 2px 20px;
		display: flex;
		align-items: center;
		height: 40px;
		border-radius: 20px;
		width: 150px;
		color: #1b2845;
		justify-content: space-between;
		font-weight: 600;
	`,

	Container: styled.div`
		display: flex;
	`,
};

export default components;
