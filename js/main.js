portarray = [
    {
        "label" : "Week 1 Code",
        "url" : "week1/index.html"
    },
    {
        "label" : "Week 2 Code",
        "url" : "week2/index.html"
    },
    {
        "label" : "Week 3 Code",
        "url" : "week3/week3notes.html"
    },
    {
        "label" : "Week 4 Notes",
        "url" : "week4/week4notes.html"
    },
    {
        "label" : "Week 4 Team Activity",
        "url" : "week4/team.html"  
    },
    {
        "label" : "Week 5 Notes",
        "url" : "week5/notes.html"
    },
    {
        "label" : "To Do App",
        "url" : "week6/index.html"
    },
    {
        "label" : "Week 7 Notes",
        "url" : "week7/notes.html"
    },
    {
        "label" : "Week 8 Notes",
        "url" : "week8/notes.html"
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