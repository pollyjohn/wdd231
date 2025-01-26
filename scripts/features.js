const today = new Date();
const year = today.getFullYear();
document.getElementById("releaseyear").textContent = year;

var lastUpdated = document.lastModified
document.getElementById("lastUpdated").textContent= lastUpdated;