const dentistEmail = '@tandartspraktijkbvt.nl';
const uniqid = Date.now();
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
		}
	],
	appointmentsData: [
		{
			id: 1579607081789,
			patientName: 'Pat Zero',
			dentistName: 'Chies Peyn',
			assistentName: 'firstName()+lastName()',
			dayNumber: 5,
			timeHour: 1400
			//assistentPresent: false
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
	const sickDentist = { ...state['dentistData'][index] };
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
			assistentPresent: assistentPresent
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
			assistentPresent: assistentPresent
		};
		newState['appointmentsData'].push(newAppointment);
		return newState;
	}
};

newState = addAppointment(
	state,
	uniqid,
	1579607071887,
	1579618630755,
	1579618623665,
	3,
	1500,
	true
);
/* newState = addAppointment(
	state,
	uniqid,
	1579607071887,
	1579618630755,
	false,
	2,
	1600,
	false
); */
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

const createDayView = state => {
	console.log('start runs');
	{
		state.appointmentsData.push(`<li class="appointment">
      <div class="time">1400</div>
      <div class="patient">Patiënt: ${appointmentPatient}</div>
      <div class="dentist">Tandarts:${appointmentDentist}</div>
      <div class="assistant">Assistent:bloebloe</div>
      </li>`);
	}
	document.querySelector('.dayview').innerHTML = appointments.join('');
};
//hier worden de afspraken geladen.
const createDayOnCalendar = numAppointments => {
	const appointments = [];
	for (let i = 0; i < numAppointments; i++) {
		appointments.push(`
      <div class="appointment">
        <span class="time">14:00</span>
        <span class="patient">${appointmentPatient}
        </span>
      </div>`);
	}
	return `<div class="day">${appointments.join('')}</div>`;
};

const createCalendarView = () => {
	const days = [];

	for (let i = 1; i < 28; i++) {
		if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
			continue;
		}
		days.push(createDayOnCalendar(5));
	}
	document.querySelector('.calendarview .table').innerHTML = days.join('');
};

const start = () => {
	try {
		createDayView();
	} catch {}

	try {
		createCalendarView();
	} catch {}
};

document.addEventListener('DOMContentLoaded', start);
