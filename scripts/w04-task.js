/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

/* Populate Profile Object with placesLive objects */
myProfile.name = "Jeremy Untch";
myProfile.photo = "images/profilepic.jpg";
myProfile.favoriteFoods = [
    'Steak',
    'Pizza',
    'Watermelon',
    'Pumpkin Pie',
    'Hamburgers'
];
myProfile.hobbies = ['Soccer', 'Video Games', 'Art'];

myProfile.placesLived = [];
myProfile.placesLived.push (
    {
        place: 'Kansas City, Missouri',
        length: '16 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Alexandria, Virginia',
        length: '2 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Rochester, New Hampshire',
        length: '3 years',
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});


