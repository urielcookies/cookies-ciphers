import styled, { StyledComponent } from 'styled-components';

const CaesarCipherStyle: StyledComponent<"div", any, {}, never> = styled.div`

	.encrypting-controls {
		display: flex;
		justify-content: space-between;

		.form-modes {
			width: 79%;
		}
		.form-keys {
			width: 19%;
		}
	}

	.textarea {
		width: 93%;
		padding: 3%;
		white-space: pre-wrap;
		overflow-wrap: break-word;
	}

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
    overflow-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
`;

export default CaesarCipherStyle;
