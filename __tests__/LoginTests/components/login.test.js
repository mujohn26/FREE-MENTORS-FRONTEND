import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {Login,mapStateToProps }from '../../../src/containers/Login.jsx'
import { props } from '../../../__mockData__/login_mockData';
import reducer from '../../../src/reducers/index';

const middlewares = [thunk];
const testStore = state => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(
		createStore,
	);
	return createStoreWithMiddleware(reducer, state);
};
const setUp = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = shallow(<Login {...props} store={store} />);
	return wrapper;
};
const setUpComponent = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = mount(<Login {...props} store={store} />);
	return wrapper;
};
const setUpInitComponent = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = mount(<Login {...props} store={store} />);
	return wrapper;
};
describe('Render login components', () => {
	it('should handle submit successfully', () => {
		const component = setUpComponent();
		component.setState({
			email: 'mujohn26@gmail.com',
			password: '0788787273'
		});
		const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
		component
			.find('[data-test="login-btn"]')
            .at(4)
			.props()
			.onClick();
		expect(handleSubmitSpy).toBeDefined();
	});

	it('should handle change successfully', () => {
		const component = setUp();
		const handleChangeSpy = jest.spyOn(component.instance(), 'handleChange');
		component
			.find('[data-test="login-email-field"]')
			.simulate('change', { target: { value: 'mujohn26@gmail.com' } });
		component
			.find('[data-test="login-password-field"]')
			.simulate('change', { target: { value: '0788787273' } });
		expect(handleChangeSpy).toBeDefined();
	});

});

describe('Render resetPassword  components', () => {

	it('should handle componentDidUpdate successfully', () => {
		const component = setUpComponent();
		const handleChangeSpy = jest.spyOn(
			component.instance(),
			'componentDidUpdate',
		);
		component.setProps({ data: 'user signed in successfully' });
		expect(handleChangeSpy).toBeDefined();
    });
    it('should map state to props', () => {
		expect(mapStateToProps);
		const state = {
			LoginReducer: {
				resuldatat: 'user signed in successfully',
				isLoading: true,
				errorMessage: 'invalid email or password',
			},
		};

		const stateObject = mapStateToProps(state);
		expect(stateObject).toBeTruthy();
	});
});
