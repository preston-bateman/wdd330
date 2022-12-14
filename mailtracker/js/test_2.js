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
    fedexTracking(newID.number);
    

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

async function oauthRequest () {
    // WARNING: For POST requests, body is set to null by browsers.
    var data = "grant_type=client_credentials&client_id=l700ae01606ea24cd9aa7305540ca338b6&client_secret=5c9d32d24ba943a1bb741e79c8cd8ce5";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("POST", "https://apis-sandbox.fedex.com/oauth/token?=");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("x-custom", "thisisgiberish");
    xhr.send(data);
        
}

async function fedexTracking(trackingNumber) {
    const {access_token} = await oauthRequest();
    var myHeaders = new Headers();
myHeaders.append("authorization", "Bearer " + access_token);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "includeDetailedScans": true,
  "trackingInfo": [
    {
      "trackingNumberInfo": {
        "trackingNumber": trackingNumber
      }
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  mode: 'no-cors',
  body: raw,
  redirect: 'follow'
};

const trackingDetails = await fetch("https://apis-sandbox.fedex.com/track/v1/trackingnumbers", requestOptions)
console.log(trackingDetails.text())
return trackingDetails.text();

}