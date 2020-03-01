export const GET_MENTORS_SUCCESS = 'GET_MENTORS';

import axios from 'axios';


export const getMentors = () => async dispatch => {
	dispatch({ type: 'LOADING_DATA', payload: true });
	const localStorageData = localStorage.getItem('token');
	const token = `${localStorageData}`;
	const headers = {
		'Content-Type': 'application/json',
		'x-auth-token': token,
	};
	try {
		const users = await axios.get(
			'https://freementor26.herokuapp.com/api/v2/mentors',
			{ headers },
        );
        console.log('response',users);
        
		dispatch(getMentorsAction(users.data.data.mentors));
		dispatch({ type: 'LOADING_DATA', payload: false });
		return users.data.data.rows;
	} catch (error) {}
};

export function getMentorsAction(data) {
	return {
		type: GET_MENTORS_SUCCESS,
		payload: data,
	};
}


