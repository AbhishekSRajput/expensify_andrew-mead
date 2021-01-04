import moment from 'moment';

const expenses = [
	{
		id: '1',
		description: 'pizza',
		note: '',
		amount: 4000,
		createdAt: 0,
	},
	{
		id: '2',
		description: 'ice cream',
		note: 'ice cream monthly',
		amount: 2000,
		createdAt: moment(0).add(4, 'days').valueOf(),
	},
	{
		id: '3',
		description: 'big house',
		note: 'bought new big house -y',
		amount: 4600000000000000000000,
		createdAt: moment(0).subtract(4, 'days').valueOf(),
	},
];

export default expenses;
