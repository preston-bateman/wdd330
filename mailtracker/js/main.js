



//USPS test api
let xml = ""
let url = "https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&xml=" + xml;

fetch(url)
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(err) {
        console.log(err);
    });