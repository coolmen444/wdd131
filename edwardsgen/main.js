import people_data from './people_list.mjs';

function renderPeople(people_data) {
    let results = document.querySelector("#results");
    results.innerHTML = ''; 
    
    people_data.forEach(person => {
        let peopleHtml = personTemplate(person);
        results.insertAdjacentHTML('beforeend', peopleHtml);
    });
}

function personTemplate(person) {
    return `<p><a href="#">${person.name}</a> b.${person.birth_year} - ${person.place_of_birth}</p>`     
}


function filterPeople(query) {
    const filteredPeople = people_data.filter(person => person.name.toLowerCase().includes(query));
    filteredPeople.sort((a, b) => a.name.localeCompare(b.name));
    return filteredPeople;
}

function search() {
    const query = searchBar.value.toLowerCase();
    const filteredPeople = filterPeople(query);
    renderPeople(filteredPeople);
}

let searchButton = document.querySelector("#search-button");
let searchBar = document.querySelector("#search-bar");

searchButton.addEventListener('click', search);
searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search();
    }
});

renderPeople(people_data);

