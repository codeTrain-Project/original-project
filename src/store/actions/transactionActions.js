import { CLEAN } from '../types';

export const transfer = (amount, recieverTag, purpose, redirect) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const profile = getState().firebase.profile;
		const tagSender = profile.tagName;
		const user = getFirebase().auth().currentUser;
		const id = getState().firebase.auth.uid;
		const firestore = getFirestore();
		const firebase = getFirebase();

		//Debit Account

		firestore
			.collection('accounts')
			.where('tagHolder', '==', tagSender)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, ' => ', doc.data());
					firestore
						.collection('accounts')
						.doc(doc.id)
						.update({
							balance: firebase.firestore.FieldValue.increment(-amount),
						})
						.then((res) => console.log('res for debit', res))
						.catch((err) => console.log('error for debit', err));
				});
			})
			//Transaction Action
			.then(() => {
				// console.log(res, 'response');
				return firestore
					.collection(`transactions/${id}/PersonalTransactions`)
					.add({
						transactionType: 'Debit',
						purpose: purpose,
						amount: amount,
						sender: tagSender,
						reciever: recieverTag,
						date: new Date(),
					})
					.then(() => {
						console.log('success');
						// dispatch({ type: ADD_TODO, tweet });
					})
					.catch((err) => {
						console.log(err);
						// dispatch({ type: ADD_TODO_FAILURE, err });
					});
			});

		//Credit

		firestore
			.collection('accounts')
			.where('tagHolder', '==', recieverTag)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, ' => ', doc.data());
					firestore
						.collection('accounts')
						.doc(doc.id)
						.update({
							balance: firebase.firestore.FieldValue.increment(amount),
						})
						.then((res) => console.log('res for credit', res))
						.catch((err) => console.log('error for credit', err));

					firestore
						.collection(`transactions/${doc.data().user}/PersonalTransactions`)
						.add({
							transactionType: 'Credit',
							purpose: purpose,
							amount: amount,
							sender: tagSender,
							reciever: recieverTag,
							date: new Date(),
						})
						.then(() => {
							console.log('success');
							redirect();
							dispatch({ type: CLEAN });
							// dispatch({ type: ADD_TODO, tweet });
						})
						.catch((err) => {
							console.log(err);
							// dispatch({ type: ADD_TODO_FAILURE, err });
						});
				});
			});
	};
};

export const keyboardUpdate = (data) => {
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

export const debitAccount = (tagSender, amount, purpose) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// const profile = getState().firebase.profile;
		// const tagSender = profile.tagName;
		// const user = getFirebase().auth().currentUser;
		// const id = getState().firebase.auth.uid;
		const firestore = getFirestore();
		const firebase = getFirebase();

		//Debit Account

		firestore
			.collection('accounts')
			.where('tagHolder', '==', tagSender)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, ' => ', doc.data());
					firestore
						.collection('accounts')
						.doc(doc.id)
						.update({
							balance: firebase.firestore.FieldValue.increment(-amount),
						});
				});
			});

		//Transaction
	};
};

export const creditAccount = (recieverTag, amount, purpose) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// const profile = getState().firebase.profile;
		// const tagSender = profile.tagName;
		// const user = getFirebase().auth().currentUser;
		// const id = getState().firebase.auth.uid;
		const firestore = getFirestore();
		const firebase = getFirebase();

		//Credit
		firestore
			.collection('accounts')
			.where('tagHolder', '==', recieverTag)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, ' => ', doc.data());
					firestore
						.collection('accounts')
						.doc(doc.id)
						.update({
							balance: firebase.firestore.FieldValue.increment(amount),
						});
				});
			});

		//Transactions
	};
};
