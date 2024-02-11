/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = '';
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temples:', error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.querySelector('#filtered').value;
switch (filter){
    case 'utah':
        displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        break;
    case 'nonutah':
        displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
        break;
    case 'older':
        displayTemples(temple.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
        break;
    case 'all':
    default:
        displayTemples(temples);
        break;
}
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });