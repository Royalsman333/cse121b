/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jeremy Untch';
let currentYear = currentDateAndTime.getFullYear();
let profilePicture = 'images/profilepic.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('id');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profilePicture');

/* Step 4 - Adding Content */
nameElement.innerHTML = '<strong>${fullName}</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of ' + fullName);

/* Step 5 - Array */
let favoriteFoods = ['Ribs', 'Dr. Pepper', 'Strawberries', 'Bananas'];
foodElement.textContent = 'My favorite foods: ' + favoriteFoods.join(', ');
let singleFavoriteFood = 'Hamburgers';
favoriteFoods.push(singleFavoriteFood);
foodElement.innerHTML += '<br>${favFoods}';
favoriteFoods.shift();
outputElement.innerHTML = 'Modified Array:<br>' + favoriteFoods.join('<br>');
favoriteFoods.pop();
outputElement.innerHTML = 'Final Modified Array:<br>' + favoriteFoods.join('br');




