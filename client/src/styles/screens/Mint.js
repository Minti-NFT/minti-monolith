import styled from "styled-components";

const Input = styled.input`
	background-color: rgba(235, 235, 245, 0.18);
	border-radius: 8px;
	height: 54px;
	border: none;
	font-weight: 600;
	padding: 0px 20px;
	margin: 5px 0px;
	max-width: calc(100% - 25px);
	font-size: 20px;
	color: rgba(174, 174, 178, 1);
	:focus {
		outline: none;
	}
`;

const components = {
	Wrapper: styled.div`
		display: flex;
		height: 100%;
		padding: 10px;
	`,

	Left: styled.div`
		width: 15%;
		margin: 0px 10px;
		background-color: transparent;
		@media (max-width: 1000px) {
			display: none;
		}
	`,

	Center: styled.div`
		width: 55%;
		margin: 0px 10px;
		padding: 0px 10%;
		margin: auto;

		@media (max-width: 1000px) {
			width: 90%;
		}

		@media (max-width: 600px) {
			width: 100%;
		}
	`,

	Right: styled.div`
		width: 30%;
		margin: 0px 10px;
		background-color: transparent;
		position: relative;
		@media (max-width: 1000px) {
			display: none;
		}
	`,

	RightBorder: styled.div`
		height: calc(60% + 10px);
		position: absolute;
		margin-top: -10px;
		width: 1px;
		background-color: rgba(80, 85, 92, 1);
	`,

	Preview: styled.div`
		padding: 20px;
		border-radius: 20px;
		width: 70%;
		height: 350px;
		border: 1px solid rgba(58, 58, 60, 1);
		margin: auto;
		color: rgba(174, 174, 178, 1);
		display: flex;
		align-items: center;
		justify-content: center;
	`,

	MintWrapper: styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 200px;
		margin: 30px 0px;
	`,

	MintButton: styled.div`
		height: 100%;
		width: 45%;
		border-radius: 20px;
		border: ${(props) =>
			props.active
				? "3px solid rgba(147, 233, 190, 1)"
				: "1px solid rgba(58, 58, 60, 1)"};
		text-align: center;
		padding: 15px 0px;
		cursor: pointer;

		:hover {
			border: 3px solid rgba(147, 233, 190, 1);
			margin: -2px;
		}
	`,

	MintImg: styled.img`
		height: 60%;
		margin-top: 20px;
	`,

	MintLabel: styled.h3`
		color: rgba(242, 242, 247, 1);
	`,

	FileWrapper: styled.div`
		border: 3px dashed rgba(142, 142, 147, 1);
		border-radius: 8px;
		width: 100%;
		height: 200px;
		text-align: center;
		padding-top: 10px;
		margin: 40px 0px;
		color: rgba(174, 174, 178, 1);
	`,

	FileButton: styled.div`
		font-weight: 600;
		color: rgba(147, 233, 190, 1);
		background-color: rgba(235, 235, 245, 0.18);
		border-radius: 30px;
		padding: 15px;
		margin: 0px 25%;
		margin-top: 50px;
		cursor: pointer;
	`,

	Input: Input,

	PrimaryInput: styled(Input)`
		width: 100%;
	`,

	PrimaryTextArea: styled.textarea`
		background-color: rgba(235, 235, 245, 0.18);
		border-radius: 8px;
		height: 54px;
		min-height: 54px;
		border: none;
		font-weight: 600;
		padding: 10px 20px;
		margin: 5px 0px;
		max-width: calc(100% - 25px);
		font-size: 20px;
		color: rgba(174, 174, 178, 1);
		width: 100%;
		resize: none;
		:focus {
			outline: none;
		}
	`,

	PropertyContainer: styled.div`
		width: 70%;
		margin: 20px 0px;
		@media (max-width: 600px) {
			width: 100%;
		}
	`,
};

export default components;
