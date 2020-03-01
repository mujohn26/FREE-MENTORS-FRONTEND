import signupReducer from '../../../src/reducers/SignupReducer';
import {
    signupSuccess ,
    signupError,
    isLoadingAction
} from '../../../__mockData__/signup_mockData_';

describe('User signup Reducer', () => {
	it('Should  created successfully', () => {
		const getState = signupReducer({}, signupSuccess);
		expect(getState).toEqual({
            payload: signupSuccess.payload,
            
		});
	});
	it('Should get error ', () => {
		const getState = signupReducer({}, signupError );
		expect(getState).toEqual({
			errorMessage: signupError.payload,
		});
	});
});
