const add = (a, b) => {
	return a + b;
};

const generateGreetings = (name = 'anonymous') => `hello ${name}!!`;

test('testing function add the addition of two numbers', () => {
	const result = add(3, 5);
	// if (result !== 8) {
	// 	throw new Error(
	// 		`you added 3,5 expected result was 8,and function is showing ${result}`
	// 	);
	//}
	expect(result).toBe(8);
});

test('should generate greetings from name', () => {
	const result = generateGreetings('mike');
	expect(result).toBe('hello mike!!');
});

test('should generate greetings for no name', () => {
	const result = generateGreetings();
	expect(result).toBe('hello anonymous!!');
});
