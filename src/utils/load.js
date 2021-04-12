// const Flutterwave = require('flutterwave-node-v3');

const PUBLIC_KEY = 'FLWPUBK_TEST-89db5b576df82763fa54852358ca72ce-X';
const SECRET_KEY = 'FLWSECK_TEST-4b947bbc5e074b406b6b91624a8cec36-X';

// const flw = new Flutterwave(PUBLIC_KEY, SECRET_KEY);

export const Gh_mobilemoney = async () => {
	console.log('Tesing mobile money');
	// try {
	// 	const payload = {
	// 		tx_ref: 'MC-158523s09v5050e8',
	// 		amount: '150',
	// 		type: 'mobile_money_ghana',
	// 		currency: 'GHS',
	// 		voucher: '143256743',
	// 		network: 'MTN', //This is the customer's mobile money network provider (possible values: MTN, VODAFONE, TIGO)
	// 		email: 'user@gmail.com',
	// 		phone_number: '054709929220',
	// 		fullname: 'John Madakin',
	// 		client_ip: '154.123.220.1',
	// 		device_fingerprint: '62wd23423rq324323qew1',
	// 		meta: {
	// 			flightID: '213213AS',
	// 		},
	// 	};

	// 	const response = await flw.MobileMoney.ghana(payload);
	// 	console.log(response);
	// } catch (error) {
	// 	console.log(error);
	// }
};

// Gh_mobilemoney();
