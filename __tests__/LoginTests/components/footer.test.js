import React from 'react';
import Footer from '../../../src/components/common/Footer';
import {shallow} from 'enzyme';
describe('Render root app component', () => {
	it('should render the root app component successfully', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.find('Router').length).toBe(0);
		expect(wrapper.find('Switch').length).toBe(0);
	});
});