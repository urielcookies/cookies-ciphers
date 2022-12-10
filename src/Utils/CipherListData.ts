interface CipherListData {
	name: string;
	description: string;
	link: string;
}

const cipherListData: readonly CipherListData[] = [
	{
		name: 'Reverse',
		description: "Message in reverse.",
		link: 'reverse',
	},
	{
		name: 'Caesar',
		description: 'Each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.',
		link: 'caesar',
	},
	{
		name: 'Transposition',
		description: 'Scrambles the positions of characters without changing the characters themselves.',
		link: 'transposition',
	}
];

export type { CipherListData };
export { cipherListData };
