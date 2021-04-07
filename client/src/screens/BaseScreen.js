import styled from "styled-components";
import Banner from "../components/Topbar";

const BaseScreen = (props) => {
	return (
		<div>
			<Banner />
			{props.children}
		</div>
	);
};

export default BaseScreen;
