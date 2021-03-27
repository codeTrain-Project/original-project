const initialState = {
	registerData: {
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
		tagName: '',
	},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'TEST':
			console.log(state);
			return {
				...state.registerData,
				email: payload.email,
				phone: payload.phone,
			};
		case 'TEST2':
			console.log(state);
			return {
				...state.registerData,
				password: payload.password,
				confirmPassword: payload.confirmPassword,
			};
		case 'TEST3':
			console.log(state);
			return {
				...state.registerData,
				tagName: payload.tagName,
			};
		case 'ALL':
			console.log('state');
			return state;

		default:
			return state;
	}
};
