import { isEmpty, isEqual } from "lodash";
import { ChangeEvent, ChangeEventHandler, FC, SyntheticEvent, useState } from "react";
import { Alert, Button, Snackbar, TextareaAutosize } from "@mui/material";

import reverse from '../../Algorithms/reverse';

import ReverseCipherStyle from "./ReverseCipherStyle";

const ReverseCipher: FC = () => {
	const [activeMessage, setActiveMessage] = useState<string>('');
	const [activeSnackbar, setActiveSnackbar] = useState<boolean>(false);
	const [textareaValue, setTextareaValue] = useState<string>('');

	const cipherMessageOnChangeHandler: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		setTextareaValue(inputValue);
		setActiveMessage(reverse(inputValue));
	};

	const clearMessage: () => void = () => {
		setActiveMessage('');
		setTextareaValue('');
	};

	const copyHandler = () => {
		navigator.clipboard.writeText(activeMessage);
		setActiveSnackbar(true)
	};

	const closeSnackbarHandler = (event: SyntheticEvent | Event, reason?: string) => {
		if (isEqual(reason, 'clickaway')) return;
		setActiveSnackbar(false);
	};


	return (
		<ReverseCipherStyle>
			<TextareaAutosize
				placeholder="Empty"
				style={{ width: '93%', padding: '3%' }}
				minRows='10'
				onChange={cipherMessageOnChangeHandler}
				value={textareaValue}
			/>

			<div className="divider" />
			<div className="actionButtons">
				<Button
					color="info"
					variant="outlined"
					disabled={isEmpty(textareaValue)}
					onClick={copyHandler}>
					Copy
				</Button>
				<Button
					color="error"
					variant="outlined"
					disabled={isEmpty(textareaValue)}
					onClick={clearMessage}>
					Clear
				</Button>
			</div>
			<div className="divider" />

			<div className="message-div">{activeMessage}</div>

			<Snackbar
				open={activeSnackbar}
				autoHideDuration={3000}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				onClose={closeSnackbarHandler}>
				<Alert onClose={closeSnackbarHandler} severity="success" sx={{ width: '100%' }}>
					Message has been copied
				</Alert>
			</Snackbar>

		</ReverseCipherStyle>
	)
};

export default ReverseCipher;
