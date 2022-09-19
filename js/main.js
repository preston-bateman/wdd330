portarray = [
    {
        "label" : "Week 1 Code",
        "url" : "week1/index.html"
    },
    {
        "label" : "Week 2 Code",
        "url" : "week2/index.html"
    }
];

portarray.forEach(value => {
    let x = document.createElement("li");
    let text = value.label;
    const att1 = document.createAttribute('id');
    att1.value = value.label;
    x.setAttributeNode(att1)
    document.getElementById("table-content").appendChild(x);
    let y = document.createElement("a");
    let linkText = value.url;
    const att = document.createAttribute("href");
    att.value = linkText;
    y.setAttributeNode(att);
    y.innerText = text;
    document.getElementById(value.label).appendChild(y);
});