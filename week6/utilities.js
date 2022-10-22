export const Task = function (content) {
    this.id = new Date();
    this.content = content;
    this.completed = false;
}

/*export function createList () {
    const obj = JSON.parse(localStorage.getItem('data'))
    obj.forEach(value => {
    let x = document.createElement("div");
    let text = value.content;
    const att1 = document.createAttribute('class');
    att1.value = 'task-list';
    const att2 = document.createAttribute('id');
    att2.value = value.id;
    x.setAttributeNode(att1);
    x.setAttributeNode(att2);
    x.innerText = text;
    console.log(x);
    document.getElementById("todo-list").appendChild(x);
    });

}*/

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function createCheck(att2) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(att2, 'check-box');
    newDiv.innerText = "X"
    const divID = document.createAttribute('id');
}

function createDelete(att2) {
    let dBTN = document.createElement('div');
    dBTN.classList.add(att2, 'delete-button');
    dBTN.innerText = 'X';
}

function createTaskInfo(text, att2) {
    let newTaskItem = document.createElement('div');
    newTaskItem.classList.add(att2, 'task-text');
    newTaskItem.innerText = text;
}

export function updatelist(ind) {
    const obj = JSON.parse(localStorage.getItem('data'));
    obj[ind].completed = !obj[ind].completed;
    localStorage.setItem('data', JSON.stringify(obj));
    updateView();
}

export function deleteRow (ind) {
    const obj = JSON.parse(localStorage.getItem('data'));
    obj.splice(ind, 1);
    localStorage.setItem('data', JSON.stringify(obj));
    updateView();
}

export function createList1 () {
    const obj = JSON.parse(localStorage.getItem('data'))
    console.log(obj);
    obj.forEach((value, index) => {
        let x = document.createElement("div");
        let text = value.content;
        let att2 = value.id;
        const xl = document.createAttribute('id');
        xl.value = att2;
        x.setAttributeNode(xl);
        x.classList.add('task-list', att2);
        document.getElementById("todo-list").appendChild(x);
        let newDiv = document.createElement("div");
        newDiv.classList.add(att2, 'check-box');
        if(value.completed) {
            newDiv.innerText = "X";
            x.classList.remove('notcompview');
            x.classList.add('compview');
        }else{
            newDiv.innerText = "";
            x.classList.remove('compview');
            x.classList.add('notcompview');
        }
        newDiv.setAttribute('onclick', 'updatelist('+index+')');
        const divID = document.createAttribute('id');
        let dBTN = document.createElement('div');
        dBTN.classList.add(att2, 'delete-button');
        dBTN.innerText = 'X';
        dBTN.setAttribute('onclick', 'deleteRow("' + index + '")');
        let newTaskItem = document.createElement('div');
        newTaskItem.classList.add(att2, 'task-text');
        newTaskItem.innerText = text;
        x.appendChild(newDiv);
        x.appendChild(newTaskItem);
        x.appendChild(dBTN);

    });

}

export function strike() {
    
}

export function updateView () {
    const parent = document.getElementById("todo-list");
    removeAllChildNodes(parent);
    createList1();
    let tasksLeftCounter = 0;
    const obj = JSON.parse(localStorage.getItem('data'))
    for (let i = 0; i < obj.length; i++){
        if (obj[i].completed === false){
            tasksLeftCounter++;
        }
    }
    let tasksLeft = document.getElementById("tasks-left");
    tasksLeft.innerHTML = `${tasksLeftCounter} Uncompleted Tasks`;    
}
