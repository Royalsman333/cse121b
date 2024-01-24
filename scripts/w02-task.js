/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Jeremy Untch";
const currentYear = new Date().getFullYear();
const profilePicture = "images/profilepic.jpg";

/* Step 3 - Element Variables */
const foodElement = document.querySelector('#food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
const nameElement = document.getElementById('name');
/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Image of ${fullName}.`);

/* Step 5 - Array */
let favfoods = ["Steak", "Hamburgers", "Cereal", "Ribs", "Dr. Pepper", "Strawberries", "Bananas"];

foodElement.innerHTML += favfoods;
let newfood = 'Turkey';
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.shift();
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.pop();
foodElement.innerHTML += `<br>${favfoods}`;




