let todos = []

const render = () => {
    document.getElementById("todoList").innerHTML = todos.map(obj => `
        <li class="flex gap-2">
            <span class="p-2 rounded-md flex-1 transition-all duration-100 ${obj.done ? "line-through bg-gray-300" : "bg-gray-100"}">${obj.task}</span>

            <button onclick="toggleDone(${obj.id});" class="transition-all duration-100 hover:scale-110 p-2 bg-${obj.done ? "green-400 text-white" : "gray-200 text-black"} rounded-md aspect-square cursor-pointer">
                <i class="fa-solid fa-check select-none"></i>
            </button>

            <button onclick="removeTask(${obj.id});" class="transition-all duration-100 hover:scale-110 p-2 bg-red-500 text-white rounded-md block aspect-square cursor-pointer">
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