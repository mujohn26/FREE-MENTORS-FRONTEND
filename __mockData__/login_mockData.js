import {LOGIN_SUCESS, LOGIN_ERROR} from '../src/actions/LoginAction';

export const props = {
	state: {
		LoginReducer: {
			payload: 'user not found!',
        },
        LoginReducer: {
			errorMessage: 'invalid email or password',
		},
	},
	classes: {
		paper:""
	}
	,
	loginUser:jest.fn(),
	loginSuccess:jest.fn(),
	deleteError:jest.fn(),
	
    isLoading:false
	
};

export const loginSuccess = {
	type:LOGIN_SUCESS,
	payload: 'login successfully'
  };

  export const loginError = {
	type:LOGIN_ERROR,
	payload: 'invalid email or password'
  };
  export const isLoadingAction = {
	type: 'LOADING',
	isLoading:true
  };
