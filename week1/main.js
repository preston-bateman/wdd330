function loadStory() {
    let storyName = document.getElementById("name").value;
    let storyHTML = localStorage.getItem(storyName);
    document.getElementById("story").value = storyHTML;
}

function saveStory() {
    let storyName = document.getElementById("name").value;
    let storyHTML = document.getElementById("story").value;
    localStorage.setItem(storyName, storyHTML);
}

function displayStory() {
    let storyHTML = document.getElementById("story").value;
    storyHTML = document.getElementById("story_display").innerHTML;
}