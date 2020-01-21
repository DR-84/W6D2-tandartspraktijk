const dentistEmail = '@tandartspraktijkbvt.nl';
const uniqid = Date.now();
const state = {
	dentistData: [
		{
			id: '1579607037003',
			firstName: 'Chies',
			lastName: 'Peyn',
			telNum: '0612345677',
			email: 'chiespeyn@tandartspraktijkbvt.nl',
			sick: false,
			assistent: false,
			dentist: true
		}
	],
	patientData: [
		{
			id: '1579607071887',
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
			id: '1579607081789',
			patientName: 'firstName()+lastName()',
			dentistName: 'firstName()+lastName()',
			assistent: 'firstName()+lastName()',
			dayNumber: 5,
			timeHour: 1400,
			assistentPresent: false
		}
	]
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
);

console.log('old state:');
console.log(state);
console.log('new state:');
console.log(newState);

//tot hier...
/* const createDayView = () => {
	const appointments = [];
	// hier komen de verwijzingen naar de juiste functie.
	for (i = 0; i < 30; i++) {
		appointments.push(`<li class="appointment">
      <div class="time">${getRandomTime()}</div>
      <div class="patient">Patiënt: ${getRandomName()}</div>
      <div class="dentist">Tandarts: ${getRandomName()}</div>
      <div class="assistant">Assistent: ${getRandomName()}</div>
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
        <span class="time">${getRandomTime()}</span>
        <span class="patient">${getRandomName()}</span>
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
 */
