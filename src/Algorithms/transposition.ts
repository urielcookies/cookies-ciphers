import { forEach, isEqual, reduce } from "lodash";

const transposition: (message: string, mode: string, key: number) => string =
	(message: string, mode: string, key: number) => {
		if (key < 2) return message;

		if (isEqual(mode, 'encrypt')) return encrypt(message, key);
		if (isEqual(mode, 'decrypt')) return decrypt(message, key);

		return '';
	}

const encrypt = (message: string, key: number) => {
	const temp: string[][] = [];

	for (let index = 0; index < key; index++) {
		temp.push([]);
	}

	let indexKey = 0;
	forEach(message, (char) => {
		temp[indexKey].push(char)
		if (indexKey === (key - 1)) indexKey = 0
		else indexKey++;
	})

	return reduce(temp, (result, list) => {
		forEach(list, (char) => result += char);
		return result;
	}, '');
}

const decrypt = (message: string, key: number) => {
	const boxes = Math.ceil(message.length / key);
	const temp: string[][] = [];

	for (let index = 0; index < boxes; index++) {
		temp.push([]);
	}
	const shadowBoxes = (key * boxes) - message.length;

	let indexKey = 0;
	forEach(message, (char) => {
		// If in last array
		if (indexKey === (temp.length - 1)) {
			const test = key - temp[indexKey].length;
			// if last array reached its limit
			if (test === shadowBoxes) {
				indexKey = 0;
				temp[indexKey].push(char);

				for (let index = 0; index < temp.length; index++) {
					if (test !== shadowBoxes) {
						const last = temp[index].slice(-1).join('');
						temp[index].push(last);
					}
				}

			} else temp[indexKey].push(char);
		} else temp[indexKey].push(char);

		if (indexKey === (boxes - 1)) indexKey = 0
		else indexKey++;

	})

	return reduce(temp, (result, list) => {
		forEach(list, (char) => result += char);
		return result;
	}, '');
}
export default transposition;
