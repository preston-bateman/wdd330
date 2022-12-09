let currentTracking = "";

const localArray = [];
if (localStorage.stored != null) {
    holder = JSON.parse(localStorage.stored);
    localArray.push(...holder);

    previousSearchFill(localArray);

    //console.log(localArray);
}
const form = document.forms['tracknum'];

form.addEventListener('submit', submitForm, false);

function submitForm(event1) {
    event1.preventDefault();

    const newID = {};

    newID.carrier = form.carrier.value;
    newID.number = form.tnumber.value;

    appendTracking(newID);

    setLocalStorage();

    //console.log(localArray);
}

function appendTracking(num) {
    localArray.unshift(num);
    if (localArray.length > 5) {
        localArray.pop();
    }
}

function setLocalStorage() {
    localStorage.setItem('stored', JSON.stringify(localArray));
}

function previousSearchFill (array1) {
    obj = document.getElementById('previouslist');
    for (var i = 0; i < array1.length; i++) {
        const node = document.createElement('li');
        node.innerText = array1[i].number;
        console.log(node.value);
        document.getElementById('previouslist').appendChild(node);
    }
}