import { CLEAN, TRANSC_START, TRANSC_FAILURE, TRANSC_SUCCESS } from '../types';

const initialState = {
	keyboardData: 0,
	transaction: {
		error: null,
		loading: false,
	},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case CLEAN:
			console.log('State from reducer', state);
			return {
				...state,
				keyboardData: 0,
			};

		case 'UPDATE_KEYBOARD':
			return {
				...state,
				keyboardData: payload,
			};
		case TRANSC_START:
			return {
				...state,
				transaction: { ...state.transaction, loading: true },
			};
		case TRANSC_SUCCESS:
			return {
				...state,
				transaction: { ...state.transaction, loading: false, error: null },
			};
		case TRANSC_FAILURE:
			return {
				...state,
				transaction: { ...state.transaction, loading: false, error: payload },
			};
		// case 'ALL':
		// 	console.log('checking state from reducer', state);

		default:
			return state;
	}
};
