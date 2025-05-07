const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [
    { task: "Complete Assignment", status: false },
    { task: "Quiz Preparation", status: false }
];

let features = [
    { 0: "Add Task" },
    { 1: "Remove Task" },
    { 2: "Mark As Complete" }
];

function showMenu() {
    console.log('********** T A S K S **********');
    if (tasks.length > 0) {
        for (let item of tasks) {
            console.log(`${item.task} : ${item.status ? "Done" : "Not Done"}`);
        }
    } else {
        console.log("There is not any task");
    }

    console.log('\n********** F E A T U R E S **********');
    for (let item of features) {
        let key = Object.keys(item)[0];
        console.log(`${key} : ${item[key]}`);
    }
}

function askFeature() {
    rl.question('\nEnter a feature number or type "exit": ', function(input) {
        if (input === "0") {
            addTask();
        } else if (input === "1") {
            removeTask();
        } else if (input === "2") {
            markAsDone();
        } else if (input.toLowerCase() === "exit") {
            rl.close();
        } else {
            console.log("Invalid input.");
            askFeature(); // retry
        }
    });
}

function addTask() {
    rl.question("Enter a name of the task to add: ", function(t) {
        if (!tasks.some(task => task.task === t)) {
            tasks.push({ task: t, status: false });
            console.log("Task added.");
        } else {
            console.log("Task already exists.");
        }
        showMenu();
        askFeature();
    });
}

function removeTask() {
    rl.question("Enter a name of the task to remove: ", function(t) {
        let index = tasks.findIndex(task => task.task === t);
        if (index !== -1) {
            tasks.splice(index, 1);
            console.log("Task removed.");
        } else {
            console.log("Task not found.");
        }
        showMenu();
        askFeature();
    });
}

function markAsDone() {
    rl.question("Enter a name of the task to mark as done: ", function(t) {
        let task = tasks.find(task => task.task === t);
        if (task) {
            task.status = true;
            console.log("Task marked as done.");
        } else {
            console.log("Task not found.");
        }
        showMenu();
        askFeature();
    });
}

// Start the program
showMenu();
askFeature();
