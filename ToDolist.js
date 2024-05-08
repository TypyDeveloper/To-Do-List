import inquirer from "inquirer";
let database2 = [];
let conditions = true;
while (conditions) {
    let answers = await inquirer.prompt([
        {
            name: "value",
            type: "list",
            message: "Choose anyone option:",
            choices: ["Add Task", "Delete Task", "Update Task", "View To Do List", "Exit"]
        }
    ]);
    if (answers.value == "Add Task") {
        let addtask = await inquirer.prompt({
            name: "one",
            message: "What do you want to add",
            type: "input"
        });
        database2.push(addtask.one);
        console.log(`${addtask.one} is your added value`);
    }
    else if (answers.value === "View To Do List") {
        console.log("Your to do list:");
        database2.forEach((task, index) => {
            console.log(`${index} : ${task} `);
        });
    }
    else if (answers.value === "Exit") {
        conditions = false;
    }
    else if (answers.value == "Delete Task") {
        let remove = await inquirer.prompt({
            name: "task",
            message: "Which Value you want to delete type index number",
            type: "number"
        });
        let deletiontask = database2.splice(remove.task, 1);
        console.log(`${deletiontask} is now deleted in your list `);
    }
    else if (answers.value === "Update Task") {
        database2.forEach((task, index) => {
            console.log(`${index} : ${task}`);
        });
    }
}
