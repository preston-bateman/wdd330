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

async function submitForm(event1) {
    event1.preventDefault();

    const newID = {};

    newID.carrier = form.carrier.value;
    newID.number = form.tnumber.value;

    appendTracking(newID);

    setLocalStorage();
    const fedexResults = await fedexTracking(newID.number);
    console.log(fedexResults);
    
    

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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", "l700ae01606ea24cd9aa7305540ca338b6");
    urlencoded.append("client_secret", "5c9d32d24ba943a1bb741e79c8cd8ce5");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    try {
        const token = await fetch("https://apis-sandbox.fedex.com/oauth/token?=", requestOptions);
        return token.json();
    }
    catch (e) {
        console.log(e);
    }
    
}

async function fedexTracking(trackingNumber) {
    const {access_token} = await oauthRequest();
    var myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + access_token);
    myHeaders.append("content-type", "application/json");

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
    body: raw,
    redirect: 'follow'
    };

    const trackingDetails = await fetch("https://apis-sandbox.fedex.com/track/v1/trackingnumbers", requestOptions)
    const parsingdetails = await trackingDetails.json()
    return parsingdetails?.output?.completeTrackResults[0]?.trackResults[0];
}