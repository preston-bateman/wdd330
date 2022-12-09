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
        const link = document.createElement('a');
        link.setAttribute('href', "#");
        const carrier = array1[i].carrier;
        const info = array1[i].number;
        link.innerText = info;
        link.addEventListener('click', packageDetails.bind(null, carrier, info), false);
        node.appendChild(link);
        document.getElementById('previouslist').appendChild(node);
    }
}

function packageDetails (carrier, trackingNumber) {
    console.log(carrier);
    const carrierNode = document.createElement('li');
    const idNode = document.createElement('li');
    carrierNode.innerText = 'Carrier: ' + carrier.toUpperCase();
    idNode.innerText = 'Tracking Number: ' + trackingNumber;
    obj = document.getElementById('trackdetails');
    obj.appendChild(carrierNode);
    obj.appendChild(idNode);
}