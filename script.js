const dentistEmail = '@tandartspraktijkbvt.nl';
const uniqid = Date.now();
//console.log(uniqid);
const state = {
	dentistData: [
		{
			id: 1579607037003,
			firstName: 'Chies',
			lastName: 'Peyn',
			telNum: '0612345677',
			email: 'chiespeyn@tandartspraktijkbvt.nl',
			sick: false,
			assistent: false,
			dentist: true
		},
		{
			id: 1579618623665,
			firstName: 'Aart',
			lastName: 'Appel',
			telNum: '0687654321',
			email: 'aartappel@tandartspraktijkbvt.nl',
			sick: false,
			assistent: true,
			dentist: false
		},
		{
			id: 1579618630755,
			firstName: 'Darth',
			lastName: 'Vader',
			telNum: '0688844458',
			email: 'darthvader@tandartspraktijkbvt.nl',
			sick: false,
			assistent: false,
			dentist: true
		},
		{
			id: 1579701419593,
			firstName: 'Ferry',
			lastName: 'Kuhlman',
			telNum: '0612345677',
			email: 'FerryKuhlman@tandartspraktijkbvt.nl',
			sick: false,
			assistent: false,
			dentist: true
		},
		{
			id: 1579701427806,
			firstName: 'Pim',
			lastName: 'Mol',
			telNum: '0687654321',
			email: 'PimMol@tandartspraktijkbvt.nl',
			sick: false,
			assistent: true,
			dentist: false
		},
		{
			id: 1579701434633,
			firstName: 'Ben',
			lastName: 'der Niet',
			telNum: '0688844458',
			email: 'darthvader@tandartspraktijkbvt.nl',
			sick: false,
			assistent: false,
			dentist: true
		}
	],
	patientData: [
		{
			id: 1579607071887,
			firstName: 'Pat',
			lastName: 'Zero',
			birthYear: 1970,
			telNum: 062345677,
			email: 'patzero@gmail.com',
			sick: false
		},
		{
			id: 1579701365335,
			firstName: 'Ko',
			lastName: 'de Kraker',
			birthYear: 1970,
			telNum: 062345677,
			email: 'patzero@gmail.com',
			sick: false
		},
		{
			id: 1579701374265,
			firstName: 'Anne-Belle',
			lastName: 'Blaas',
			birthYear: 1970,
			telNum: 062345677,
			email: 'patzero@gmail.com',
			sick: false
		},
		{
			id: 1579701380146,
			firstName: 'Stenley',
			lastName: 'Messie',
			birthYear: 1970,
			telNum: 062345677,
			email: 'patzero@gmail.com',
			sick: false
		}
	],
	appointmentsData: [
		{
			id: 1579701233235,
			patientName: 'Pat Zero',
			dentistName: 'Chies Peyn',
			assistentName: false,
			dayNumber: 5,
			timeHour: 1400,
			assistentPresent: false,
			cancelled: false
		},
		{
			id: 1579701240872,
			patientName: 'Pat Zero',
			dentistName: 'Chies Peyn',
			assistentName: false,
			dayNumber: 5,
			timeHour: 1400,
			assistentPresent: false,
			cancelled: false
		},
		{
			id: 1579701284984,
			patientName: 'Pat Zero',
			dentistName: 'Chies Peyn',
			assistentName: false,
			dayNumber: 5,
			timeHour: 1400,
			assistentPresent: false,
			cancelled: false
		},
		{
			id: 1579607081789,
			patientName: 'Pat Zero',
			dentistName: 'Chies Peyn',
			assistentName: false,
			dayNumber: 5,
			timeHour: 1400,
			assistentPresent: false,
			cancelled: false
		},
		{
			id: 1579701248376,
			patientName: 'Aart',
			dentistName: 'Darth Vader',
			assistentName: 'Aart Appel',
			dayNumber: 3,
			timeHour: 1500,
			assistentPresent: true,
			cancelled: false
		},
		{
			id: 1579701272250,
			patientName: 'Pat Zero',
			dentistName: 'Darth Vader',
			assistentName: 'Aart Appel',
			dayNumber: 5,
			timeHour: 2000,
			assistentPresent: true,
			cancelled: false
		},
		{
			id: 1579688862405,
			patientName: 'Pat Zero',
			dentistName: 'Aart Appel',
			assistentName: 'Darth Vader',
			dayNumber: 3,
			timeHour: 1100,
			assistentPresent: true,
			cancelled: false
		}
	]
};

const addPatient = (state, ...args) => {
	const newState = { ...state };
	newState['patientData'] = [...state['patientData']];
	const newPatient = {
		id: args[0],
		firstName: args[1],
		lastName: args[2],
		birthYear: args[3],
		telNum: args[4],
		email: args[5],
		sick: args[6]
	};
	newState['patientData'].push(newPatient);
	return newState;
};

const addDentist = (state, ...args) => {
	const newState = { ...state };
	newState['dentistData'] = [...state['dentistData']];
	const newDentist = {
		id: args[0],
		firstName: args[1],
		lastName: args[2],
		telNum: args[3],
		email: args[4],
		sick: args[5],
		assistent: args[6],
		dentist: args[7]
	};
	newState['dentistData'].push(newDentist);
	return newState;
};

const makeDentistSick = (state, dentId) => {
	const newState = { ...state };
	newState['dentistData'] = [...state['dentistData']];
	const index = state['dentistData'].findIndex(
		dentist => dentist.id === dentId
	);
	const sickDentist = newState['dentistData'][index];
	sickDentist['sick'] = true;
	newState['dentistData'][index] = sickDentist;
	return newState;
};

const addAppointment = (
	state,
	id,
	patId,
	dentId,
	assisId,
	day,
	time,
	assistentPresent
) => {
	const newState = { ...state };
	newState['appointmentsData'] = [...state['appointmentsData']];
	const patientObj = state['patientData'].find(patient => patient.id === patId);
	const patientNames = patientObj['firstName'] + ' ' + patientObj['lastName'];
	const dentistObj = state['dentistData'].find(
		dentist => dentist.id === dentId
	);

	const dentistNames = dentistObj['firstName'] + ' ' + dentistObj['lastName'];
	console.log(dentistNames);
	const findObjByDentName = state['appointmentsData'].find(
		name => name.dentistName === dentistNames
	);

	const isSameDay = state['appointmentsData'].find(
		dayNum => dayNum.dayNumber === day
	);
	const isSameTime = state['appointmentsData'].find(
		timeNum => timeNum.timeHour === time
	);

	console.log('time checker', isSameTime);
	console.log('day checker', isSameDay);
	console.log('name checker', dentistNames);
	if (findObjByDentName && isSameDay && isSameTime) {
		return newState;
	} else {
		if (assistentPresent === true) {
			const assistentObj = state['dentistData'].find(
				assistent => assistent.id === assisId
			);
			const assitentNames =
				assistentObj['firstName'] + ' ' + assistentObj['lastName'];
			const newAppointment = {
				id: id,
				patientName: patientNames,
				dentistName: dentistNames,
				assistentName: assitentNames,
				dayNumber: day,
				timeHour: time,
				assistentPresent: assistentPresent,
				cancelled: false
			};
			newState['appointmentsData'].push(newAppointment);
			return newState;
		} else {
			const newAppointment = {
				id: id,
				patientName: patientNames,
				dentistName: dentistNames,
				assistentName: assisId,
				dayNumber: day,
				timeHour: time,
				assistentPresent: assistentPresent,
				cancelled: false
			};
			newState['appointmentsData'].push(newAppointment);
			return newState;
		}
	}
};

const makePatientSick = (state, patId) => {
	const newState = { ...state };
	newState['appointmentsData'] = [...state['appointmentsData']];
	const appointmentObj = state['appointmentsData'].find(
		patient => patient.id === patId
	);
	console.log(appointmentObj);
	let appointmentCancelled = { ...state['appointmentsData']['cancelled'] };
	appointmentCancelled = true;
	newState['appointmentsData']['cancelled'] = appointmentCancelled;
	return newState;
};

const removeAppointment = (state, appointmentId) => {
	const newState = { ...state };
	newState['appointmentsData'] = [...state['appointmentsData']];

	newState['appointmentsData'] = newState['appointmentsData'].filter(
		appoint => appoint.id !== appointmentId
	);

	return newState;
};
const moveAppointment = (state, appointmentId, newDayNumber, newTime) => {
	const newState = { ...state };
	newState['appointmentsData'] = [...state['appointmentsData']];
	// get appointment to move
	let getOldAppointment = state['appointmentsData'].find(
		appoint => appoint.id === appointmentId
	);
	console.log(getOldAppointment);
	//find names in object old appointment
	const oldAppDentist = getOldAppointment.dentistName;
	const oldAppAssist = getOldAppointment.assistentName;
	// find appointmetns with same day
	const filterDay = state['appointmentsData'].filter(
		appoint => appoint.dayNumber === newDayNumber
	);
	// filter same hours out of same day array
	const filteredDaysByTime = filterDay.filter(
		appoint => appoint.timeHour === newTime
	);
	//check if same time appointment has same dentist
	const checkDentistName = filteredDaysByTime.find(
		appoint => appoint.dentistName === oldAppDentist
	);
	const checkAssistantName = filteredDaysByTime.find(
		appoint => appoint.assistentName === oldAppAssist
	);

	//if get day and get time zijn ja >> check of dentist and assist ook is ja
	if (filteredDaysByTime && checkDentistName && checkAssistantName) {
		console.log(
			'doesnt go through here!',
			filteredDaysByTime && checkDentistName && checkAssistantName
		);
		return newState;
	} else {
		const newAppointment = {
			id: uniqid,
			patientName: getOldAppointment['patientName'],
			dentistName: getOldAppointment['dentistName'],
			assistentName: getOldAppointment['assistentName'],
			dayNumber: newDayNumber,
			timeHour: newTime,
			assistentPresent: getOldAppointment['assistentPresent'],
			cancelled: getOldAppointment['cancelled']
		};

		newState['appointmentsData'].push(newAppointment);
		return newState;
	}
};

newState = moveAppointment(state, 1579688862405, 3, 1100);
/* newState = makePatientSick(state, 1579607071887); */
/* newState = removeAppointment(state, 1579688862405); */
/* newState = addAppointment(
	state,
	uniqid,
	1579607071887,
	1579618630755,
	1579618623665,
	3,
	1600,
	true
); */
/* newState = addAppointment(
	state,
	uniqid,
	1579607071887,
	1579618630755,
	1579618623665,
	3,
	1500,
	true
); */
/* newState = addAppointment(
	state,
	uniqid,
	1579607071887,
	1579618630755,
	1579618623665,
	3,
	2100,
	true
); */
/* newState = addAppointment(
	state,
	uniqid,
	1579607071887,
	1579618630755,
	false,
	2,
	1600,
	false 
);*/
/*newState = makeDentistSick(state, 1579607037003);
newState2 = addPatient(
	state,
	uniqid,
	'Piet',
	'Auw',
	'06-12345679',
	'piet@wincacademy.nl',
	1985
);
newState = addDentist(
	state,
	uniqid,
	'Toos',
	'Trekker',
	'06-12345678',
	'toos@tandartspraktijkbvt.nl',
	false,
	false,
	true
); */

console.log('old state:');
console.log(state);
console.log('new state:');
console.log(newState);

/* const createDayView = (state) => {
	const listItem = document.createElement('li');
	const appointmentElement = document.getElementById('dayview');
	state.appointmentsData.map(item => console.log(item));
	item.forEach(element => {});
};

const createCalendarView = () => {};

const start = () => {
	createDayView();
	createCalendarView();
};
 
document.addEventListener('DOMContentLoaded', start);*/
