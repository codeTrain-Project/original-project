import { CLEAN } from '../types';

const initialState = {
	keyboardData: 0,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		// case typeName:
		//   return { ...state, ...payload }
		case CLEAN:
			return {
				...state,
				keyboardData: 0,
			};

		case 'UPDATE':
			return {
				...state,
				keyboardData: payload,
			};

		case 'ALL':
			console.log('checking state from reducer', state);

		default:
			return state;
	}
};
