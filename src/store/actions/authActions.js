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
} from '../types';

export const signUp = () => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		const { email, phone, password, tag } = getState().auth.registerData;
		// console.log(email, phone, password, tagName);
		dispatch({ type: SIGN_UP_START });
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				// console.log(res, 'response');
				return firestore
					.collection(`users`)
					.doc(res.user.uid)
					.set({
						email: email,
						phone: phone,
						password: password,
						tagName: tag,
						dateJoined: new Date(),
						profileImg: '',
					})
					.then(() => {
						// console.log(res, 'response');

						firestore.collection(`accounts`).doc(res.user.uid).set({
							user: res.user.uid,
							tagHolder: tag,
							dateCreated: new Date(),
							balance: 50000,
							updatedAt: new Date(),
						});

						dispatch({ type: SIGN_UP_SUCCESS });
					});
			})

			// .then(() => {
			// 	dispatch({ type: SIGN_UP_SUCCESS });
			// })
			.catch((err) => {
				console.log(err);
				dispatch({ type: SIGN_UP_FAILURE, payload: err.message });
			});
	};
};

export const update = (data) => {
	return {
		type: 'UPDATE',
		payload: data,
	};
};

export const all = () => {
	return {
		type: 'ALL',
	};
};

export const login = (values) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		dispatch({ type: LOGIN_START });
		firebase
			.auth()
			.signInWithEmailAndPassword(values.email.trim(), values.password.trim())
			.then(() => {
				dispatch({
					type: LOGIN_SUCCESS,
				});
			})
			.catch((err) => {
				dispatch({
					type: LOGIN_FAILURE,
					payload: err.message,
				});
			});
	};
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		dispatch({ type: LOGOUT_START });
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: LOGOUT_SUCCESS });
			})
			.catch((err) => {
				dispatch({ type: LOGOUT_FAILURE, payload: err.message });
			});
	};
};
