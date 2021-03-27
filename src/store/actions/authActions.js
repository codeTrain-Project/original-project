export const signUp = (values, onSuccess, onError) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();
		dispatch({ type: SIGN_UP_START });
		firebase
			.auth()
			.createUserWithEmailAndPassword(values.email, values.password)
			.then((res) => {
				console.log(res);
				return firestore.collection(`users`).doc(res.user.uid).set({
					name: values.name,
					handle: values.handle,
					dateJoined: new Date(),
					profileImg: '',
				});
			})
			.then(() => {
				dispatch({ type: SIGN_UP_SUCCESS });
			})
			.catch((err) => {
				dispatch({ type: SIGN_UP_FAILURE, payload: err.message });
			});
	};
};

export const go = (data) => {
	return {
		type: 'TEST',
		payload: data,
	};
};

export const go2 = (data) => {
	return {
		type: 'TEST2',
		payload: data,
	};
};

export const go3 = (data) => {
	return {
		type: 'TEST3',
		payload: data,
	};
};

export const all = () => {
	return {
		type: 'ALL',
	};
};
