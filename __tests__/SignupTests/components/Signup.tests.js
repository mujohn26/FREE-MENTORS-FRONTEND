import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {Signup,mapStateToProps} from '../../../src/containers/signup.jsx'
import { props } from '../../../__mockData__/signup_mockData_';
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
	const wrapper = shallow(<Signup {...props} store={store} />);
	return wrapper;
};
const setUpComponent = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = mount(<Signup {...props} store={store} />);
	return wrapper;
};
const setUpInitComponent = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = mount(<Signup {...props} store={store} />);
	return wrapper;
};
describe('Render signup components', () => {
	it('should handle submit successfully', () => {
		const component = setUpComponent();
		component.setState({
            firstName:'mugiraneza',
            lastName:'john',
            address:'kigali',
            bio:'nyagatare',
            occupation:'engineer',
            expertise:'software engineer',
			email: 'mujohn26@gmail.com',
			password: '0788787273'
		});
		const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
		component
			.find('[data-test="signup-btn"]')
            .at(4)
			.props()
			.onClick();
		expect(handleSubmitSpy).toBeDefined();
	});

	// it('should handle change successfully', () => {
	// 	const component = setUp();
	// 	const handleChangeSpy = jest.spyOn(component.instance(), 'handleChange');
	// 	component
	// 		.find('[data-test="signup-firstName-field"]')
	// 		.simulate('change', { target: { value: 'mugiraneza' } });
	// 	component
	// 		.find('[data-test="signup-lastName-field"]')
    //         .simulate('change', { target: { value: 'john' } });
    //         component
	// 		.find('[data-test="signup-email-field"]')
    //         .simulate('change', { target: { value: 'mujohn25@gmail.com' } });
    //         component
	// 		.find('[data-test="signup-password-field"]')
    //         .simulate('change', { target: { value: '0788787273' } });
    //         component
	// 		.find('[ data-test="signup-address-field"]')
    //         .simulate('change', { target: { value: 'kigali' } });
    //         component
	// 		.find('[data-test="signup-bio-field"]')
    //         .simulate('change', { target: { value: 'nyagatare' } });
    //         component
	// 		.find('[data-test="signup-occupation-field" ]')
    //         .simulate('change', { target: { value: 'engineer' } });
    //         component
	// 		.find('[data-test="login-expertise-field"  ]')
	// 		.simulate('change', { target: { value: 'software engineer' } });
	// 	expect(handleChangeSpy).toBeDefined();
	// });

});

describe('Render signup components', () => {

	it('should handle componentDidUpdate successfully', () => {
		const component = setUpComponent();
		const handleChangeSpy = jest.spyOn(
			component.instance(),
			'componentDidUpdate',
		);
		component.setProps({ data: 'user created successfully' });
		expect(handleChangeSpy).toBeDefined();
    });
    it('should map state to props', () => {
		expect(mapStateToProps);
		const state = {
			SignupReducer: {
                data: 'user created successfully',
                errorMessage:'first name required',
                isLoading:true,
            
			},
		};

		const stateObject = mapStateToProps(state);
		expect(stateObject).toBeTruthy();
	});
});
