import recipes from './recipes.mjs';

function getRandomNumber(num) {
    return Math.floor(Math.random()* num);
}

function getRandomRecipe(list) {
    let randomIndex = getRandomNumber(list.length);
    return list[randomIndex];
}

function recipeTemplate(recipe) {
    return `<div class="single-recipe"> <img src="${recipe.image}" alt="${recipe.name}" class="food-image">
        <aside>
            <div class="tag-container">
                ${tagsTemplate(recipe.tags)}
            </div>  
            <h2>${recipe.name}</h2>
            <span
                class="rating"
                role="img"
                aria-label="Rating: 4 out of 5 stars"
            >
                ${ratingTemplate(recipe.rating)}
            </span>
            <p class="description">${recipe.description}'</p>
        </aside> </div>`
            
}

function tagsTemplate(tags) {
	let html = ""
    for (let tag of tags) {
        html += `<div class="tag">${tag}</div>`;
    }
	return html;
}

function ratingTemplate(rating) {
	
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`

    for (let i = 0; i <5; i++) {
        if (i < rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
	
	html += `</span>`

	return html
}


function renderRecipes(recipeList) {
    let main = document.querySelector("main");
    main.innerHTML = ''; // This will clear any existing content (random recipe or search results)
    
    recipeList.forEach(recipe => {
        let recipeHtml = recipeTemplate(recipe);
        main.insertAdjacentHTML('beforeend', recipeHtml);
    });
}
function init() {
  // get a random recipe
  const recipe = getRandomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}

function filterRecipes(query) {
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
    filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
    return filteredRecipes;

}

function search() {
    const query = searchBar.value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

let searchButton = document.querySelector("#search-button");
let searchBar = document.querySelector("#search-bar");
searchButton.addEventListener('click', search);
init();