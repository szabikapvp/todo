let todos = [
    {id: 0, task: "Bevásárlás", done: false},
    {id: 1, task: "JS tanulás", done: false},
    {id: 2, task: "Könyvtár", done: false},
]

const render = () => {
    document.getElementById("todoList").innerHTML = todos.map(obj => `
        <li class="flex gap-2">
            <span class="p-2 bg-gray-100 rounded-md flex-1 ${obj.done ? "line-through" : ""}">${obj.task}</span>

            <button onclick="toggleDone(${obj.id});" class="p-2 bg-${obj.done ? "green-300" : "gray-200"} rounded-md aspect-square cursor-pointer">
                <i class="fa-solid fa-check select-none"></i>
            </button>

            <button onclick="removeTask(${obj.id});" class="p-2 bg-red-500 text-white rounded-md block aspect-square cursor-pointer">
                <i class="fa-solid fa-trash select-none"></i>
            </button>
        </li>
    `).join("");
}

const addTask = () => {
    const task = document.getElementById("task").value;
    if (!task) return;
    const newTask = {id: Date.now(), task, done: false};
    todos.push(newTask);

    document.getElementById("task").value = "";

    render();
    
}

const toggleDone = (id) => {
    todos = todos.map(obj => obj.id == id ? {...obj, done: !obj.done} : obj);
    render();
}

const removeTask = (id) => {
    todos = todos.filter(obj => obj.id != id);
    render();
}

render();