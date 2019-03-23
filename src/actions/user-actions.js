const UPDATE_USER = 'user:updateUser';

const updateUser = newUser => {
	return {
		type: UPDATE_USER,
		payload: newUser
	};
};

export { updateUser, UPDATE_USER };
