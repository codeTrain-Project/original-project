import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebase from '../../Firebase';
import rootReducer from './reducers/index';

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebase)
	)
);

export default store;
