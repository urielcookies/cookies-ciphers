import styled, { StyledComponent } from 'styled-components';

const ReverseCipherStyle: StyledComponent<"div", any, {}, never> = styled.div`
	.divider {
		height: 5px;
	}

	.actionButtons {
		display: flex;
    justify-content: space-between;

		Button {
			width: 48.5%;
		}
	}

	.message-div {
		
	}
`;

export default ReverseCipherStyle;
