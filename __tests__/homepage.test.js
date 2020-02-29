import React from 'react';
import Homepage from '../src/components/HomePage.jsx'
import {shallow} from 'enzyme';
describe('Render root app component', () => {
	it('should render the root app component successfully', () => {
		const wrapper = shallow(<Homepage />);
		expect(wrapper.find('Router').length).toBe(0);
		expect(wrapper.find('Switch').length).toBe(1);
	});
});