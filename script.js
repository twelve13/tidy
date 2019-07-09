const start = document.getElementById("start");
const dateShown = document.getElementById("date");
const taskContainer = document.getElementById("task-container");
const task = document.getElementById("task");

const dailies = [
"Put clean dishes away.", 
"Wash dirty dishes.", 
"Wipe down kitchen counters.", 
"Wipe up kitchen floors.",
"Put items away in bathroom.",
"Put items away in bedroom.",
"Sweep up kitty litter."
]

const weeklies = [
"Do laundry.",
"Roomba.",
"Wipe down appliances.",
"Clean sink, fridge handle, and microwave exterior.",
"Clean toilet, bathroom counter, mirror, and floors.",
"Put clean laundry away.",
"Water plants.",
"Put things away in dining room and atrium.",
"Put things away in loft.",
"Put things away in art room / office.",
"Clean out car.",
"Empty vacuums.",
"Take out trash and recycling.",
"Replace water in chinchilla water bottle."
]

const monthlies = [
"Clean microwave interior.",
"Mop floors.",
"Clean out fridge, freezer, and pantry.",
"Clean shower.",
"Clean cat bedding and tree.",
"Scan and shred documents.",
"Disinfect light switches and doorknobs."
]

const quarterlies = [
"Replace air filter.",
"Replace water filter.",
"Replace dish sponge.",
"Wash blankets and pillows.",
"Wash windows.",
"Replace chinchilla cage lining.",
"Clear up laptop desktop."
]

let tasks = [];


function showTasks() {

	start.remove(0);
	task.classList.add("show");

	tasks = [...dailies];

	let date = new Date();
	let day = date.getDay();
	let dayOfMonth = date.getDate();
	let month = date.getMonth();

	if (day == 0) {
		tasks.push(...weeklies);

		if (dayOfMonth >=24) {
			tasks.push(...monthlies);

			if(month == 2 || 5 || 8 || 11) {
				tasks.push(...quarterlies);
			}
		}
	}

	index=0;

	task.innerText=tasks[index];
}

function nextTask() {
	
	if(index < tasks.length-1){
		index++;
		task.innerText=tasks[index];
	} else {
		taskContainer.classList.add("hide");
	}
};

start.addEventListener("click", showTasks);
taskContainer.addEventListener("click", nextTask);
