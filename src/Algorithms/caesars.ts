import { isEqual, reduce } from "lodash";
import { SYMBOLS } from "../Utils/Constants";

const caesars = (message: string, mode: string, key: number) =>
	reduce(message, (result, char) => {
		const index: number = SYMBOLS.indexOf(char);
		let newIndex: number = index;
		if (!isEqual(index, -1)) {
			if (isEqual(mode, 'encrypt')) newIndex = newIndex + key;
			if (isEqual(mode, 'decrypt')) newIndex = newIndex - key;
		}

		if (newIndex >= SYMBOLS.length) newIndex = newIndex - SYMBOLS.length;
		if (newIndex < 0) newIndex = newIndex + SYMBOLS.length;

		return result += SYMBOLS[newIndex];
	}, '');

export default caesars;
