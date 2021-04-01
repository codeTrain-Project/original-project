import {
	SIGN_UP_SUCCESS,
	SIGN_UP_START,
	SIGN_UP_FAILURE,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
	LOGOUT_START,
} from '../types';

const initialState = {
	registerData: {
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
		tagName: '',
	},
	signUp: {
		error: null,
		loading: false,
	},
	logout: {
		error: null,
		loading: false,
	},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'TEST':
			return {
				...state,
				registerData: { ...state.registerData, ...payload },
			};

		case SIGN_UP_START:
			return {
				...state,
				signUp: { ...state.signUp, loading: true },
			};
		case SIGN_UP_SUCCESS:
			return {
				...state,
				signUp: { ...state.signUp, loading: false, error: null },
			};

		case SIGN_UP_FAILURE:
			return {
				...state,
				signUp: { ...state.signUp, loading: false, error: payload },
			};

		case LOGOUT_START:
			return {
				...state,
				logout: { ...state.logout, loading: true },
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				logout: { ...state.logout, loading: false, error: null },
			};
		case LOGOUT_FAILURE:
			return {
				...state,
				logout: { ...state.logout, loading: false, error: payload },
			};
		default:
			return state;
	}
};
