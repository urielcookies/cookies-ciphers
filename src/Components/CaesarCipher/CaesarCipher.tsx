import {
	ChangeEvent,
	ChangeEventHandler,
	FC,
	SyntheticEvent,
	useState
} from "react";
import { isEmpty, isEqual, map } from "lodash";

import {
	Alert,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Snackbar,
	TextareaAutosize
} from "@mui/material";

import caesars from '../../Algorithms/caesars';
import { SYMBOLS } from "../../Utils/Constants";

import CaesarCipherStyle from "./CaesarCipherStyle";

const CaesarCipher: FC = () => {
	const [activeMessage, setActiveMessage] = useState<string>('');
	const [activeSnackbar, setActiveSnackbar] = useState<boolean>(false);
	const [encryptionKey, setEncryptionKey] = useState<number>(0);
	const [encryptionMode, setEncryptionMode] = useState<string>('encrypt');
	const [textareaValue, setTextareaValue] = useState<string>('');

	const clearMessage: () => void = () => {
		setActiveMessage('');
		setTextareaValue('');
		setEncryptionKey(0);
		setEncryptionMode('encrypt');
	};

	const encryptionModeHandler: (event: SelectChangeEvent<string>) => void =
		(event: SelectChangeEvent<string>) => {
			const selectValue = event.target.value;
			setEncryptionMode(selectValue);
			setActiveMessage(caesars(textareaValue, selectValue, encryptionKey));
		};

	const encryptionKeyHandler: (event: SelectChangeEvent<string>) => void =
		(event: SelectChangeEvent<string>) => {
			const selectValue = event.target.value;
			setEncryptionKey(Number(selectValue));
			setActiveMessage(caesars(textareaValue, encryptionMode, Number(selectValue)));
		};

	const cipherMessageOnChangeHandler: ChangeEventHandler =
		(event: ChangeEvent<HTMLInputElement>) => {
			const inputValue = event.target.value;
			setTextareaValue(inputValue);
			setActiveMessage(caesars(inputValue, encryptionMode, encryptionKey));
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
		<CaesarCipherStyle>
			<div className="encrypting-controls">
				<FormControl className="form-modes" >
					<InputLabel id="options-encryption">Modes</InputLabel>
					<Select
						labelId="options-encryption"
						value={encryptionMode}
						label="Modes"
						onChange={encryptionModeHandler}
					>
						<MenuItem value="encrypt">Encrypt</MenuItem>
						<MenuItem value="decrypt">Decrypt</MenuItem>
					</Select>
				</FormControl>

				<FormControl className="form-keys">
					<InputLabel id="options-key">Key</InputLabel>
					<Select
						labelId="options-key"
						value={String(encryptionKey)}
						label="Key"
						onChange={encryptionKeyHandler}
					>
						{map(SYMBOLS, (symbol, index) => (
							<MenuItem key={symbol} value={index}>{index}</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>

			<div className="divider" />
			<div className="divider" />
			<div className="divider" />

			<TextareaAutosize
				className="textarea"
				placeholder="Empty"
				minRows='10'
				onChange={cipherMessageOnChangeHandler}
				value={textareaValue}
			/>

			<div className="divider" />
			<div className="divider" />
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
			<div className="divider" />
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

		</CaesarCipherStyle>
	)
};

export default CaesarCipher;
