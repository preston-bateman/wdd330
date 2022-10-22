import * as Utilities from './utilities.js'


//checking if there is already data
if (localStorage.getItem('data') === null){
    localStorage.setItem('data', '[]')
}
let taskArray = JSON.parse(localStorage.getItem('data'));

const btn = document.getElementById("btn");
let tasksLeft = document.getElementById("tasks-left");
tasksLeft.innerHTML = 0;

//Utilities.createList1();
window.onload = updateBoard();

function updateBoard () {
    updateTask()
    Utilities.updateView()
    clearValue()
}

function updateTask () {
    const content = document.getElementById("entered-text").value.trim();
    if (content === "") {
    }
    else {
        const newTask = new Utilities.Task(content);
        const updateArray = JSON.parse(localStorage.getItem('data'))
        updateArray.push(newTask);
        const arrayString = JSON.stringify(updateArray);
        localStorage.setItem('data', arrayString);
    }
    /*const newTask = new Utilities.Task(content);
    const updateArray = JSON.parse(localStorage.getItem('data'))
    updateArray.push(newTask);
    const arrayString = JSON.stringify(updateArray);
    localStorage.setItem('data', arrayString);*/
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

function filterView(num) {
    if (num === '1'){
        let a = document.getElementsByClassName('compview');
        let b = document.getElementsByClassName('notcompview')
        for (let i = 0; i < a.length; i++) {
            a[i].style.display = 'flex';
        }
        for (let i = 0; i < b.length; i++) {
            b[i].style.display = 'flex';
        }
    }else if (num === '2'){
        let a = document.getElementsByClassName('compview');
        let b = document.getElementsByClassName('notcompview')
        for (let i = 0; i < a.length; i++) {
            a[i].style.display = 'none';
        }
        for (let i = 0; i < b.length; i++) {
            b[i].style.display = 'flex';
        }
    }else if (num === '3'){
        let a = document.getElementsByClassName('compview');
        let b = document.getElementsByClassName('notcompview')
        for (let i = 0; i < a.length; i++) {
            a[i].style.display = 'flex';
        }
        for (let i = 0; i < b.length; i++) {
            b[i].style.display = 'none';
        }
    }
}

window.updatelist = updatelist;
window.updateView = Utilities.updateView;
window.deleteRow = Utilities.deleteRow;
window.filterView = filterView;






























for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
}




