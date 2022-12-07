import { forEach, includes, isEqual } from "lodash";
import { SYMBOLS } from "../Utils/Constants";

const caesars = (message: string, mode: string, key: number) => {
	let translated = '';

	forEach(message, (symbol) => {
		if (includes(SYMBOLS, symbol)) {
			const symbolIndex = SYMBOLS.indexOf(symbol);

			let translatedIndex = 0;
			if (isEqual(mode, 'encrypt')) {
				translatedIndex = symbolIndex + key;
			}
			else if (isEqual(mode, 'decrypt')) {
				translatedIndex = symbolIndex - key;
			}

			if (translatedIndex >= SYMBOLS.length) {
				translatedIndex = translatedIndex - SYMBOLS.length;
			}
			else if (translatedIndex < 0) {
				translatedIndex = translatedIndex + SYMBOLS.length;
			}

			translated = translated + SYMBOLS[translatedIndex];
		}
		else {
			translated = translated + symbol;
		}
	});

	return translated;
};

export default caesars;
