import {
	SIGN_UP_SUCCESS,
	SIGN_UP_START,
	SIGN_UP_FAILURE,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
	LOGOUT_START,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	CLEAN,
} from '../types';

const initialState = {
	registerData: {
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
		tag: '',
	},
	signUp: {
		error: null,
		loading: false,
	},
	logout: {
		error: null,
		loading: false,
	},
	login: {
		error: null,
		loading: false,
	},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case CLEAN: {
			return {
				...state,

				login: { ...state.login, loading: false, error: null },
				logout: { ...state.logout, loading: false, error: null },
				register: { ...state.register, handleError: false },
				signUp: {
					...state.signUp,
					loading: false,
					error: null,
				},
			};
		}

		case 'UPDATE':
			return {
				...state,
				registerData: { ...state.registerData, ...payload },
			};
		case 'ALL':
			// console.log('from reducer', state.registerData);
			return state;
		case LOGIN_START:
			return {
				...state,
				login: { ...state.login, loading: true },
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				login: { ...state.login, loading: false, error: null },
			};
		case LOGIN_FAILURE:
			return {
				...state,
				login: { ...state.login, loading: false, error: payload },
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
