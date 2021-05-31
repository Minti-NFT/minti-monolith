import styled from "styled-components";

const FlexedContainer = styled.div`
	display: flex;
`;

const components = {
	FlexedContainer: FlexedContainer,

	Wrapper: styled(FlexedContainer)`
		height: 100vh;
		max-height: 100vh;
		overflow-y: auto;
	`,

	LogoContainer: styled(FlexedContainer)`
		padding: 20px;
	`,

	TextContainer: styled.img`
		height: calc(48px * 0.85);
	`,

	IconContainer: styled.img`
		height: calc(50px * 0.85);
	`,

	Left: styled.div`
		width: 20%;
		background-color: rgba(47, 233, 190, 1);
	`,

	Right: styled(FlexedContainer)`
		width: 80%;
		background-color: #1c1c1e;
		align-items: center;
	`,

	Header: styled.p`
		font-weight: 800;
		font-size: 33px;
		color: white;
		margin-bottom: 10px;
		margin-top: 10px;
	`,

	Desc: styled.p`
		color: #aeaeb2;
		font-size: 15px;
		font-weight: 600;
	`,
};

export default components;
