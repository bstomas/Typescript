const users = { 
    name: 'Tomas', 
    age: 26, 
    country: 'Portugal', 
    city: 'Cascais',
};

let tasks = [];
let tasksAdded = 0;

document.querySelector("#user-profile-js").innerHTML = `
<div class="col-4"></div>
<div class="col-8">
    <div class="user-name-js">
        <label>Name: </label>
        <span>${users.name}</span>
    </div>
    <div>
        <label>Age: </label>
        <span>${users.age}</span>
    </div>
    <div>
    <label>City: </label>
    <span>${users.city}</span>
    </div>
    <div>
    <label>Country: </label>
    <span>${users.country}</span>
    </div>
</div>
`;

function displayTasks(tasks){
    document.querySelector(".todo-list-js").innerHTML = tasks.map((task, index) => {
        return `
        <div class="task">
            <div class="task-name">
                <label>Name: </label>
                <span>${task.name}</span>
            </div>
            <div class="task-creation-date">
                <label>Creation date: </label>
                <span>${task.creationDate}</span>
            </div>
            <div class="task-end-date">
                <label>End Date: </label>
                <span>${task.endDate}</span>
            </div>
            <div class="task-message">
                <label>Message: </label>
                <span>${task.message}</span>
            </div>
            <div class="task-complete" onclick=()>
            <label>Completed: </label>
            <span>${task.completed}</span>
        </div>
            <button class ="btn btn-danger" onclick="removeTask('${tasks.id}')">Remove task</button>
        </div>
        `;
    });
}

function addNewTask(event){
    event.preventDefault();
    tasksAdded++;

    const taskName = document.querySelector("input[name='taskName']").value;
    const taskCreationDate = new Date();
    const taskEndDate = document.querySelector("input[name='endDate']").value;
    const taskMessage = document.querySelector("input[name='taskMessage']").value;

tasks.push({
    id: "task" + tasksAdded,
    name: taskName,
    creationDate: taskCreationDate,
    endDate: taskEndDate,
    message: taskMessage,
    completed: false,
});

displayTasks(tasks);
}

function removeTask(id){
    // tasks = tasks.filter((t) => t.name.trim() !== taskName.trim());
    const index = tasks.findIndex((t) => t.id === id);
    tasks.splice(index, 1);
    displayTasks(tasks);
}

function toggleComplete(id) {
    const index = tasks.findIndex((t) => t.id === id);
    tasks[index].completed 
    // task = tasks.map(task => {
    //     if(task.id === id) {
    //         return{...task, completed: !task.completed };
    //     }

    //     return task;
    // });

    displayTasks(tasks);
}


