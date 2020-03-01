import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {signup,SIGNUP_SUCESS,SIGNUP_ERROR,deleteError} from '../../../src/actions/signupActions'
import moxios from 'moxios';
import axios from 'axios';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('signup  actions', () => {
	beforeEach(() => {
		moxios.install(axios);
	});
	afterEach(() => {
		moxios.uninstall(axios);
	});

	it('should be able to login ', async () => {

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 201,
				response: {
					status: 201,
					message: 'user created successfully',
					data: {
						data: {
							token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NCwidXNlckVtYWlsIjoibXVqb2huMjZAZ21haWwuY29tIiwiaXNNZW50b3IiOmZhbHNlLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTgzMDA0MTIyLCJleHAiOjE1ODMwOTA1MjJ9.RfK9X_m-5tON4kTlFuGKyoC8gzzw39A6429I48StI70',
						},
					},
				},
			});
		});

		const expectedActions = [
			{
				type: 'LOADING',
				payload: true,
			},
			{
                "payload": "user created successfully",
                "type": SIGNUP_SUCESS
			},
			{
				type: 'LOADING',
				payload: false,
			},
		];
		const store = mockStore({});
		await store.dispatch(signup(  {     firstName:'mugiraneza',
        lastName:'john',
        address:'kigali',
        bio:'nyagatare',
        occupation:'engineer',
        expertise:'software engineer',
        email: 'mujohn26@gmail.com',
        password: '0788787273'})).then(async () => {
			const result = store.getActions();

			expect(store.getActions()).toEqual(expectedActions);
		});
	});
	it('should display error when email or password are not correct', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.reject({
				status: 401,
				response: {
					data: {
						status: 401,
						error: "first name is required",
					},
				},
			});
		});
		const expectedActions = [
			{
				payload: true,
				type: 'LOADING',
			},
			{
                "payload": "first name is required",
				type: SIGNUP_ERROR,
			},
			{
				payload: false,
				type: 'LOADING',
			},
		];

		const store = mockStore({});
		await store.dispatch(signup({   
        lastName:'john',
        address:'kigali',
        bio:'nyagatare',
        occupation:'engineer',
        expertise:'software engineer',
        email: 'mujohn26@gmail.com',
        password: '0788787273'})).then(async () => {
			const result = store.getActions();
			expect(result).toEqual(expectedActions);
		});
	});

    it('should delete signup error', () => {
		const deleteForgotErrorAction = [
			{
                type: SIGNUP_ERROR,
                payload:''
			},
		];
		const store = mockStore({});
		store.dispatch(deleteError());
		expect(store.getActions()).toEqual(deleteForgotErrorAction);
	});
});
