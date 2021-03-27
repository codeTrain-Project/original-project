import React from 'react';
import { Provider } from 'react-redux';
import MainApp from './MainIndex';
import firebase from './Firebase';
import store from './src/store/index';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import AuthIsLoaded from './src/components/AuthIsLoaded';

// react-redux-firebase config
const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance, // <- needed if using firestore
};

export default function App() {
	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<AuthIsLoaded>
					<MainApp />
				</AuthIsLoaded>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}
