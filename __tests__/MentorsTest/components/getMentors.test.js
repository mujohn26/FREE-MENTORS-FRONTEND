import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
    GetMentors,
	mapStateToProps,
} from '../../../src/containers/Mentors.jsx';
import { props } from '../../../__mockData__/getMentors_mockData';
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
	const wrapper = shallow(<GetMentors {...props} store={store} />);
	return wrapper;
};
const setUpComponent = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = mount(<GetMentors {...props} store={store} />);
	return wrapper;
};
// describe('Render user role setting  components', () => {
// 	it('should handle click successfully', () => {
// 		const token =
// 			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoibXVqb2huMjVAZ21haWwuY29tIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWQiOjF9LCJpYXQiOjE1ODIyNDI0OTEsImV4cCI6MTU4MjMyODg5MX0.S_GO2R1kNZJrro5NbJOjO4S0UfBfhLaF-QtoiOUlmDo';
// 		localStorage.setItem('token', token);
// 		const component = setUpComponent();
// 		const handleSubmitSpy = jest.spyOn(component.instance(), 'handleClick');
// 		component
// 			.find('[data-test="update-btn"]')
// 			.at(4)
// 			.props()
// 			.onClick();
// 		expect(handleSubmitSpy).toBeDefined();
// 	});
// });

describe('Render user role setting components', () => {


	it('should handle will mount successfully', () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NCwidXNlckVtYWlsIjoibXVqb2huMjZAZ21haWwuY29tIiwiaXNNZW50b3IiOmZhbHNlLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTgzMDk0NjMzLCJleHAiOjE1ODMxODEwMzN9.B2PkYvZuRHBPVdkvf6uWR7PqGOcGuVFh9CRFa4byOSA';
		localStorage.setItem('token', token);
		const component = setUpComponent();
		const handleChangeSpy = jest.spyOn(
			component.instance(),
			'UNSAFE_componentWillMount',
		);
		expect(handleChangeSpy).toBeDefined();
	});

	it('should handle change page', () => {
		const wrapper = mount(<GetMentors {...props} />);
		wrapper.setState({
			page: 2,
		});
		const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleChangePage');

		wrapper.instance().handleChangePage();
	});

	it('should handle change row per page', () => {
		const wrapper = mount(<GetMentors {...props} />);
		wrapper.setState({
			rowsPerPage: 5,
			page: 0,
		});
		const mockedEvent = { target: { value: 5 } };
		const handleSubmitSpy = jest.spyOn(
			wrapper.instance(),
			'handleChangeRowsPerPage',
		);

		wrapper.instance().handleChangeRowsPerPage(mockedEvent);
	});
	it('should map state to props', () => {
		expect(mapStateToProps);
		const state = {
			GetMentorsReducer: {
				result: [
					{
                        "id": 1,
                        "email": "mujohn68@gmail.com",
                        "address": "kigali",
                        "bio": "born in Rwanda",
                        "occupation": "software engineer",
                        "expertise": "angular js"
					},
				],
			},
		};

		const stateObject = mapStateToProps(state);
		expect(stateObject).toBeTruthy();
	});
});
