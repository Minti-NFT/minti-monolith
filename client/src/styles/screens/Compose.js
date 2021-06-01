import styled from "styled-components";

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
		height: 45%;
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
		border: 1px solid rgba(58, 58, 60, 1);
		text-align: center;
		padding: 15px 0px;
		cursor: pointer;

		:hover {
			border: 3px solid rgba(147, 233, 190, 1);
			margin: -2px;
		}
	`,

	ActionWrapper: styled.div`
		border: 3px dashed rgba(142, 142, 147, 1);
		border-radius: 8px;
		padding: 40px 60px;
		text-align: center;
		color: rgba(174, 174, 178, 1);
		background: transparent;
		flex: 1 1 0px;
	`,

	ActionButton: styled.div`
		font-weight: 600;
		color: rgba(147, 233, 190, 1);
		background-color: rgba(235, 235, 245, 0.18);
		border-radius: 30px;
		padding: 15px;
		cursor: pointer;
	`,

	PrimaryTextArea: styled.textarea`
		background-color: rgba(60, 60, 67, 0.6);
		border-radius: 8px;
		height: 54px;
		min-height: 54px;
		border: none;
		font-weight: 600;
		padding: 20px;
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

	PrimaryLabel: styled.h3`
		color: #93e9be;
		,argin-bottom: 5px;
	`,
	PostToContainer: styled.div`
		display: flex;
		justify-content: space-between;
		width: 100%;
		border-radius: 8px;
		background-color: rgba(60, 60, 67, 0.6);
		padding: 20px;
		margin: 5px 0px;
		max-width: calc(100% - 25px);
		height: 50px;
		overflow-y: auto;
	`,
};

export default components;
