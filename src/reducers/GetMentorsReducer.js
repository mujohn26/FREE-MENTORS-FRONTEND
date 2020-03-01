const GetMentorsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_MENTORS':
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
};
export default GetMentorsReducer;
