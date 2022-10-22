import * as Utilities from './utilities.js'


//checking if there is already data
if (localStorage.getItem('data') === null){
    localStorage.setItem('data', '[]')
}
const taskArray = JSON.parse(localStorage.getItem('data'));

const btn = document.getElementById("btn");
let tasksLeft = document.getElementById("tasks-left");
tasksLeft.innerHTML = 0;

Utilities.createList1();

function updateBoard () {
    updateTask()
    Utilities.updateView()
    clearValue()
}

function updateTask () {
    const content = document.getElementById("entered-text").value.trim();
    const newTask = new Utilities.Task(content);
    taskArray.push(newTask);
    const arrayString = JSON.stringify(taskArray);
    localStorage.setItem('data', arrayString);
}


function clearValue () {
    const el = document.getElementById("entered-text");
    el.value = ""
}

// listener for the button click
document.getElementById("btn").addEventListener('click', updateBoard);

function updatelist(ind) {
    const obj = JSON.parse(localStorage.getItem('data'));
    obj[ind].completed = !obj[ind].completed;
    localStorage.setItem('data', JSON.stringify(obj));
    updateView();
}

function updateView(num) {
    if (num === '1'){
        document.getElementsByClassName('compview').style.display = 'flex';
        document.getElementsByClassName('notcompview').style.display = 'flex';
    }else if (num === '2'){
        document.getElementsByClassName('compview').style.display = 'flex';
        document.getElementsByClassName('notcompview').style.display = 'none';
    }else if (num === '3'){
        document.getElementsByClassName('compview').style.display = 'none';
        document.getElementsByClassName('notcompview').style.display = 'flex';
    }
}

window.updatelist = updatelist;
window.updateView = Utilities.updateView;
window.deleteRow = Utilities.deleteRow;






























for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
}




