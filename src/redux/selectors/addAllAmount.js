const totalAmount = (expenses) => {
	return expenses
		.map((expense) => expense.amount)
		.reduce((sum, value) => sum + value, 0);
};

export default totalAmount;
