import { CLEAN, TRANSC_START, TRANSC_FAILURE, TRANSC_SUCCESS } from '../types';


export const transfer = (amount, recieverTag, purpose, redirect) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const profile = getState().firebase.profile;
	const tagSender = profile.tagName;
	const user = getFirebase().auth().currentUser;
	const id = getState().firebase.auth.uid;
	const firestore = getFirestore();
	const firebase = getFirebase();

	if (amount < 1) return;
	if (tagSender === recieverTag) return;
	if (purpose === '') return;

	try {
		dispatch({ type: TRANSC_START });
		//Search whether the reciever is registered
		const recieverRes = await firestore
			.collection('accounts')
			.where('tagHolder', '==', recieverTag)
			.get();
		// console.log('recieve dooooocsssssssssss', recieverRes.docs);
		if (recieverRes.docs.length === 0) {
			console.log('array empty');
			dispatch({
				type: TRANSC_FAILURE,
				payload: 'User is not registered or check for correct spelling',
			});
			return;
		}

		//Debit
		//Fetcher sender's accounts
		const response = await firestore
			.collection('accounts')
			.where('tagHolder', '==', tagSender)
			.get();

		for (const doc of response.docs) {
			console.log(doc.id, '=>', doc.data());

			//Check for enough funds
			if (doc.data().balance < amount)
				return dispatch({
					type: TRANSC_FAILURE,
					payload: "You don't have enough funds for the transaction",
				});
			//Debit sender
			const response = await firestore
				.collection('accounts')
				.doc(doc.id)
				.update({
					balance: firebase.firestore.FieldValue.increment(-amount),
				});
			console.log('Debitted', response);
		}

		//Update transactions details
		const updateTranx = await firestore
			.collection(`transactions/${id}/PersonalTransactions`)
			.add({
				transactionType: 'Debit',
				purpose: purpose,
				amount: amount,
				sender: tagSender,
				reciever: recieverTag,
				date: new Date(),
			});
		// console.log('updateTranxupdateTranxupdateTranx', updateTranx);

		//Credit

		for (const doc of recieverRes.docs) {
			console.log(doc.id, '=>', doc.data());
			//Credit reciever
			const credit = await firestore
				.collection('accounts')
				.doc(doc.id)
				.update({
					balance: firebase.firestore.FieldValue.increment(amount),
				});

			console.log('credittedcredittedcredittedcreditted', credit);

			//Update transactions details
			const updateCreditTranx = await firestore
				.collection(`transactions/${doc.data().user}/PersonalTransactions`)
				.add({
					transactionType: 'Credit',
					purpose: purpose,
					amount: amount,
					sender: tagSender,
					reciever: recieverTag,
					date: new Date(),
				});
			// console.log(
			// 	'updateCreditTranxupdateCreditTranxupdateCreditTranxupdateCreditTranx',
			// 	updateCreditTranx
			// );
		}
		dispatch({ type: TRANSC_SUCCESS });
		redirect();
		dispatch({ type: CLEAN });
	} catch (error) {
		dispatch({
			type: TRANSC_FAILURE,
			payload: error.message,
		});
	}
};

export const request = (amount, recieverTag, purpose, redirect) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const profile = getState().firebase.profile;
	const tagSender = profile.tagName;
	const user = getFirebase().auth().currentUser;
	const id = getState().firebase.auth.uid;
	const firestore = getFirestore();
	const firebase = getFirebase();

	if (amount < 1) return;
	if (tagSender === recieverTag) return;
	if (purpose === '') return;

	//Sending Request transaction
	try {
		dispatch({ type: TRANSC_START });

		//Search whether the reciever is registered
		const recieverRes = await firestore
			.collection('accounts')
			.where('tagHolder', '==', recieverTag)
			.get();
		// console.log('recieve dooooocsssssssssss', recieverRes.docs);
		if (recieverRes.docs.length === 0) {
			console.log('array empty');
			dispatch({
				type: TRANSC_FAILURE,
				payload: 'User is not registered or check for correct spelling',
			});
			return;
		}

		//Saved transaction in personal db
		const response = await firestore
			.collection(`transactions/${id}/PersonalTransactions`)
			.add({
				transactionType: 'Requested',
				purpose: purpose,
				amount: amount,
				sender: tagSender,
				reciever: recieverTag,
				date: new Date(),
			});
		console.log('responseresponseresponseresponse', response);
		redirect();
		dispatch({ type: CLEAN });

		//Noticing request recieve
		for (const doc of recieverRes.docs) {
			console.log(doc.id, '=>', doc.data());

			const updateTranx = await firestore
				.collection(`transactions/${doc.data().user}/PersonalTransactions`)
				.add({
					transactionType: 'Request',
					purpose: purpose,
					amount: amount,
					sender: tagSender,
					reciever: recieverTag,
					date: new Date(),
				});



			// console.log('updateTranx updateTranx updateTranx ', updateTranx);
			// redirect();
			dispatch({ type: CLEAN });
			dispatch({ type: TRANSC_SUCCESS });
		}
	} catch (error) {
		dispatch({
			type: TRANSC_FAILURE,
			payload: error.message,
		});
	}
};

export const keyboardUpdate = (data) => {
	return {
		type: 'UPDATE_KEYBOARD',
		payload: data,
	};
};

export const all = () => {
	return {
		type: 'ALL',
	};
};

export const test = () => {
	return {
		type: 'TEST',
	};
};

export const clean = () => {
	return {
		type: CLEAN,
	};
};

// export const debitAccount = (tagSender, amount, purpose) => {
// 	return (dispatch, getState, { getFirebase, getFirestore }) => {
// 		// const profile = getState().firebase.profile;
// 		// const tagSender = profile.tagName;
// 		// const user = getFirebase().auth().currentUser;
// 		// const id = getState().firebase.auth.uid;
// 		const firestore = getFirestore();
// 		const firebase = getFirebase();

// 		//Debit Account

// 		firestore
// 			.collection('accounts')
// 			.where('tagHolder', '==', tagSender)
// 			.get()
// 			.then((querySnapshot) => {
// 				querySnapshot.forEach((doc) => {
// 					// doc.data() is never undefined for query doc snapshots
// 					console.log(doc.id, ' => ', doc.data());
// 					firestore
// 						.collection('accounts')
// 						.doc(doc.id)
// 						.update({
// 							balance: firebase.firestore.FieldValue.increment(-amount),
// 						});
// 				});
// 			});

// 		//Transaction
// 	};
// };

// export const creditAccount = (recieverTag, amount, purpose) => {
// 	return (dispatch, getState, { getFirebase, getFirestore }) => {
// 		// const profile = getState().firebase.profile;
// 		// const tagSender = profile.tagName;
// 		// const user = getFirebase().auth().currentUser;
// 		// const id = getState().firebase.auth.uid;
// 		const firestore = getFirestore();
// 		const firebase = getFirebase();

// 		//Credit
// 		firestore
// 			.collection('accounts')
// 			.where('tagHolder', '==', recieverTag)
// 			.get()
// 			.then((querySnapshot) => {
// 				querySnapshot.forEach((doc) => {
// 					// doc.data() is never undefined for query doc snapshots
// 					console.log(doc.id, ' => ', doc.data());
// 					firestore
// 						.collection('accounts')
// 						.doc(doc.id)
// 						.update({
// 							balance: firebase.firestore.FieldValue.increment(amount),
// 						});
// 				});
// 			});

// 		//Transactions
// 	};
// };

// export const transfere = (amount, recieverTag, purpose, redirect) => {
// 	return (dispatch, getState, { getFirebase, getFirestore }) => {
// 		const profile = getState().firebase.profile;
// 		const tagSender = profile.tagName;
// 		const user = getFirebase().auth().currentUser;
// 		const id = getState().firebase.auth.uid;
// 		const firestore = getFirestore();
// 		const firebase = getFirebase();

// 		// if (amount < 1) return;
// 		// if (tagSender === recieverTag) return;
// 		// if (purpose === '') return;

// 		//Debit Account
// 		dispatch({ type: TRANSC_START });
// 		firestore
// 			.collection('accounts')
// 			.where('tagHolder', '==', tagSender)
// 			.get()
// 			.then((querySnapshot) => {
// 				console.log(
// 					'querySnapshotquerySnapshotquerySnapshotquerySnapshot',
// 					querySnapshot
// 				);
// 				querySnapshot.forEach((doc) => {
// 					console.log('Debitttt');
// 					// doc.data() is never undefined for query doc snapshots
// 					// console.log(doc.id, ' => ', doc.data());
// 					firestore
// 						.collection('accounts')
// 						.doc(doc.id)
// 						.update({
// 							balance: firebase.firestore.FieldValue.increment(-amount),
// 						})
// 						.then((res) => console.log('res for debit', res))
// 						.catch((err) => {
// 							console.log('error for debit', err);
// 							dispatch({ type: TRANSC_FAILURE, payload: err.message });
// 						});
// 				});
// 			})
// 			//Transaction Action
// 			.then(() => {
// 				// console.log(res, 'response');
// 				return firestore
// 					.collection(`transactions/${id}/PersonalTransactions`)
// 					.add({
// 						transactionType: 'Debit',
// 						purpose: purpose,
// 						amount: amount,
// 						sender: tagSender,
// 						reciever: recieverTag,
// 						date: new Date(),
// 					})
// 					.then(() => {
// 						console.log('success');
// 						// dispatch({ type: ADD_TODO, tweet });
// 					})
// 					.catch((err) => {
// 						console.log(err);
// 						dispatch({
// 							type: TRANSC_FAILURE,
// 							payload: err.message,
// 						});
// 					});
// 			});

// 		//Credit

// 		firestore
// 			.collection('accounts')
// 			.where('tagHolder', '==', recieverTag)
// 			.get()
// 			.then((querySnapshot) => {
// 				querySnapshot.forEach((doc) => {
// 					console.log('credittt');
// 					// doc.data() is never undefined for query doc snapshots
// 					// console.log(doc.id, ' => ', doc.data());
// 					firestore
// 						.collection('accounts')
// 						.doc(doc.id)
// 						.update({
// 							balance: firebase.firestore.FieldValue.increment(amount),
// 						})
// 						.then((res) => console.log('res for credit', res))
// 						.catch((err) => {
// 							console.log('error for credit', err);
// 							dispatch({ type: TRANSC_FAILURE, payload: err.message });
// 						});

// 					firestore
// 						.collection(`transactions/${doc.data().user}/PersonalTransactions`)
// 						.add({
// 							transactionType: 'Credit',
// 							purpose: purpose,
// 							amount: amount,
// 							sender: tagSender,
// 							reciever: recieverTag,
// 							date: new Date(),
// 						})
// 						.then(() => {
// 							redirect();
// 							dispatch({ type: CLEAN });
// 							dispatch({ type: TRANSC_SUCCESS });
// 						})
// 						.catch((err) => {
// 							console.log(err);
// 							dispatch({
// 								type: TRANSC_FAILURE,
// 								payload: err.message,
// 							});
// 						});
// 				});
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 				dispatch({
// 					type: TRANSC_FAILURE,
// 					payload: err.message,
// 				});
// 			});
// 	};
// };
