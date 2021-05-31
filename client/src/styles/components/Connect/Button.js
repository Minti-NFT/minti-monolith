import styled from "styled-components";

const components = {
	ConnectionButton: styled.div`
		border-radius: 40px;
		width: 100%;
		cursor: pointer;
		border: 1px solid #2c2c2e;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		margin: 10px 0px;

		:hover {
			border-color: rgba(47, 233, 190, 1);
		}

		transition: 0.5s;
	`,

	ConnectionIcon: styled.img`
		position: absolute;
		margin: 0px 10px;
		left: 0;
		height: 40px;
	`,

	ConnectionText: styled.p`
		color: white;
		font-weight: 600;
		text-align: center;
	`,
};

export default components;
