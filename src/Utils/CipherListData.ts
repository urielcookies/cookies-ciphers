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
		name: 'Birthday Gift',
		description: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
		link: 'test1',
	},
	{
		name: 'Recipe to try',
		description: 'I am try out this new BBQ recipe, I think this might be amazing',
		link: 'test2',
	},
	{
		name: 'Yes!',
		description: 'I have the tickets to the ReactConf for this year.',
		link: 'test3',
	},
	{
		name: "Doctor's Appointment",
		description: 'My appointment for the doctor was rescheduled for next Saturday.',
		link: 'test4',
	},
	{
		name: 'Discussion',
		description: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
		link: 'test5',
	},
	{
		name: 'Summer BBQ',
		description: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
		link: 'test6',
	},
];

export type { CipherListData };
export { cipherListData };
