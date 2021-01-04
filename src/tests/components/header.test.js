import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render header correctly', () => {
	const renderer = new ReactShallowRenderer();
	renderer.render(<Header />);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
	//lets you see the component you rendered and it's elements
	//console.log(renderer.getRenderOutput());
});
