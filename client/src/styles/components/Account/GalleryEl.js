import styled from "styled-components";

const components = {
	Wrapper: styled.div`
		border-radius: 12px;
		border: 1px solid #3a3a3c;
		padding: 10px;
		margin: 1%;
	`,

	Image: styled.img`
		height: 230px;
		width: 230px;
	`,

	Heading: styled.h3`
		color: #f2f2f7;
		margin-top: 10px;
		margin-bottom: 5px;
		padding: 0px;
	`,

	InfoContainer: styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`,

	InnerInfoContainer: styled.div`
		display: flex;
		align-items: center;
	`,

	Price: styled.p`
		color: #93e9be;
		font-weight: 600;
		margin: 0px;
		margin-right: 10px;
	`,

	Stock: styled.p`
		color: #8e8e93;
		margin: 0px;
	`,
};

export default components;
