

export const props = {
	result: {
		GetMentorsReducer: {
			users: [
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
	},
	classes: {
		paper:""
	}
	,
	getMentors:jest.fn(),
    getMentorsAction:jest.fn(),
	
};


