import {SIGNUP_SUCESS,SIGNUP_ERROR} from '../src/actions/signupActions';

export const props = {
	state: {
		SignupReducer: {
			payload: 'user created successfully',
        },
        SignupReducer: {
			errorMessage: 'validations error',
		},
	},
	classes: {
		paper:""
	}
	,
	signup:jest.fn(),
    deleteError:jest.fn(),
    isLoading:false
	
};

export const signupSuccess = {
	type:SIGNUP_SUCESS,
	payload: 'created successfully'
  };

  export const signupError = {
	type:SIGNUP_ERROR,
	payload: 'first name is required'
  };
  export const isLoadingAction = {
	type: 'LOADING',
	isLoading:true
  };

