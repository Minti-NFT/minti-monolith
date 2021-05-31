import Banner from "../components/Topbar";
import BaseScreenComponents from "../styles/screens/BaseScreen";

const BaseScreen = (props) => {
	return (
		<>
			<Banner />
			<BaseScreenComponents.Wrapper className="dk-wrapper">
				{props.children}
			</BaseScreenComponents.Wrapper>
		</>
	);
};

export default BaseScreen;
