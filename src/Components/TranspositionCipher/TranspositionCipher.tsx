import { ChangeEvent, ChangeEventHandler, FC, SyntheticEvent, useCallback, useEffect, useState } from 'react'
import { includes, isEmpty, isEqual, map } from 'lodash';

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

import transposition from '../../Algorithms/transposition';

import TranspositionCipherStyle from './TranspositionCipherStyle';


const TranspositionCipher: FC = () => {
	const [activeMessage, setActiveMessage] = useState<string>('');
	const [activeSnackbar, setActiveSnackbar] = useState<boolean>(false);
	const [encryptionKey, setEncryptionKey] = useState<number>(2);
	const [encryptionMode, setEncryptionMode] = useState<string>('encrypt');
	const [textareaValue, setTextareaValue] = useState<string>('');

	const clearMessage: () => void = () => {
		setActiveMessage('');
		setTextareaValue('');
		setEncryptionKey(2);
		setEncryptionMode('encrypt');
	};

	const encryptionModeHandler: (event: SelectChangeEvent<string>) => void =
		(event: SelectChangeEvent<string>) => {
			const selectValue = event.target.value;
			setEncryptionMode(selectValue);
			setActiveMessage(transposition(textareaValue, selectValue, encryptionKey));
		};

	const encryptionKeyHandler: (event: SelectChangeEvent<string>) => void =
		(event: SelectChangeEvent<string>) => {
			const selectValue = event.target.value;
			setEncryptionKey(Number(selectValue));
			setActiveMessage(transposition(textareaValue, encryptionMode, Number(selectValue)));
		};

	const cipherMessageOnChangeHandler: ChangeEventHandler =
		(event: ChangeEvent<HTMLInputElement>) => {
			const inputValue = event.target.value;
			setTextareaValue(inputValue);
			setActiveMessage(transposition(inputValue, encryptionMode, encryptionKey));
		};

	const copyHandler: () => void = () => {
		navigator.clipboard.writeText(activeMessage);
		setActiveSnackbar(true)
	};

	const closeSnackbarHandler = (event: SyntheticEvent | Event, reason?: string) => {
		if (isEqual(reason, 'clickaway')) return;
		setActiveSnackbar(false);
	};

	const keyOptionsRenderer = useCallback(() => {
		const options: JSX.Element[] = [];
		const keyNumbers: number = Math.floor(textareaValue.length / 2)
		for (let i = 0; i <= keyNumbers; i++) {
			options.push(
				<MenuItem key={i} value={i}>{i}</MenuItem>
			);
		}

		if (options.length > 2) {
			// Needs to start with key 2
			options.shift();
			options.shift();
			return options;
		} else return [
			<MenuItem
				key={0}
				value="No Key Avaliable (type a message)">
				No Key Avaliable (type a message)
			</MenuItem>
		];
	}, [textareaValue.length])

	useEffect(() => {
		if (encryptionKey > keyOptionsRenderer().length) {
			setEncryptionKey(keyOptionsRenderer().length + 1);
		}
	}, [encryptionKey, keyOptionsRenderer, textareaValue]);

	const keyValueCalculatorHandler = () => {
		const keys = map(map(keyOptionsRenderer(), 'key'), Number);
		if (textareaValue.length >= 4 && !includes(keys, encryptionKey))
			return String(encryptionKey - 1);

		return textareaValue.length >= 4 ? String(encryptionKey) : 'No Key Avaliable (type a message)';
	}

	return (
		<TranspositionCipherStyle>
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
						value={keyValueCalculatorHandler()}
						label="Key"
						onChange={encryptionKeyHandler}
					>
						{keyOptionsRenderer()}
					</Select>
				</FormControl>
			</div>

			<div className="divider" />

			<TextareaAutosize
				className="textarea"
				placeholder="Empty"
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

		</TranspositionCipherStyle>
	)
};

export default TranspositionCipher;
