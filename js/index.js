
const body = document.body;
let footer = document.createElement("footer");
body.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();
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

function toggleMessageSection()
{
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    if (messageList.children.length === 0)
    {
        messageSection.style.display = "none";
    }
    else 
    {
        messageSection.style.display = "block"
    }
}
toggleMessageSection();

const messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', function(event)
{
    event.preventDefault();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log('Name: ', userName);
    console.log('Email: ', userEmail);
    console.log('Message: ', userMessage);


    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${userEmail}"> ${userName}: </a> <span>${userMessage}</span>`;
 
    const editButton = document.createElement("button");
    editButton.innerText="edit";
    editButton.type="button";

    editButton.addEventListener("click", function() 
    {
    const messageSpan = newMessage.querySelector("span");
    const newText = prompt("Edit your message:", messageSpan.innerText);
    if (newText !== null) 
        {
            messageSpan.innerText = newText;
        }    

    });

    newMessage.appendChild(editButton);
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type="button";

    removeButton.addEventListener('click', function()
    {
        const entry = removeButton.parentNode;

        entry.remove();
        toggleMessageSection();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    toggleMessageSection();
    event.target.reset();

});