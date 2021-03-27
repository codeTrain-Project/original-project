import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
	apiKey: 'AIzaSyDNe-hccLkYw4GEqdQfCI9NLqFRroY4NG4',
	authDomain: 'handy-money-c850a.firebaseapp.com',
	projectId: 'handy-money-c850a',
	storageBucket: 'handy-money-c850a.appspot.com',
	messagingSenderId: '457608574462',
	appId: '1:457608574462:web:cc1c1359ae0001fc3f3caf',
	measurementId: 'G-7YBLSHY6KK',
};

firebase.initializeApp(config);
firebase.firestore();

const storage = firebase.storage();

export { storage, firebase as default };
