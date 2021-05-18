import styled from "styled-components";
import Banner from "../components/Topbar";

const Wrapper = styled.div`
	height: calc(100vh - 82px);
	overflow-y: auto;
`;

const BaseScreen = (props) => {
	return (
		<>
			<Banner />
			<Wrapper className="dk-wrapper">{props.children}</Wrapper>
		</>
	);
};

export default BaseScreen;
