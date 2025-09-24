
const body = document.body;

let footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 Christian Jimenez ${thisYear}`;
footer.appendChild(copyright);

footer.style.textAlign = "center";

//---------skills------------

const skills = ["Javascript", "C++", "Git" , "GitHub"];

const skillsSection = document.getElementById("Skills");
const skillList = skillsSection.querySelector("ul");


skills.forEach(skill => {
    const element = document.createElement("li");
    element.innerText = skill;
    skillList.append(element);
});