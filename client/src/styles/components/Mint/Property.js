import styled from "styled-components";
import MintComponents from "../../screens/Mint";

const components = {
	Wrapper: styled.div`
		display: flex;
		justify-content: space-between;
	`,

	Input: styled(MintComponents.Input)`
		width: 37.5%;
	`,
};

export default components;
