interface CipherListData {
	name: string;
	description: string;
	link: string;
}

const cipherListData: readonly CipherListData[] = [
	{
		name: 'Reverse',
		description: "Makes a string of words in reverse",
		link: 'reverse',
	},
	{
		name: 'Caesar',
		description: 'Shifts alphabet and numbers based on the key (number) selected',
		link: 'caesar',
	},
	{
		name: 'Transposition',
		description: 'unkown yet',
		link: 'transposition',
	}
];

export type { CipherListData };
export { cipherListData };
