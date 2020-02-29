import loginReducer from '../../src/reducers/LoginReducer';
import {
    loginSuccess,
    loginError,
    isLoadingAction
} from '../../__mockData__/login_mockData';

describe('User login  Reducer', () => {
	it('Should  login successfully', () => {
		const getState = loginReducer({}, loginSuccess);
		expect(getState).toEqual({
            payload: loginSuccess.payload,
            
		});
	});
	it('Should get error on success', () => {
		const getState = loginReducer({}, loginError );
		expect(getState).toEqual({
			errorMessage: loginError.payload,
		});
	});
});
