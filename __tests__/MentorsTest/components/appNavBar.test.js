import React from 'react';
import AppNavBar from '../../../src/components/common/AppNavBarDashboard';
import {shallow} from 'enzyme';
describe('Render root app component', () => {
	it('should render the root app component successfully', () => {
		const wrapper = shallow(<AppNavBar />);
		expect(wrapper.find('Router').length).toBe(0);
		expect(wrapper.find('Switch').length).toBe(0);
	});
});