
function searchFood(){
    const searchField = document.getElementById('food-input');
    const searchText = searchField.value;
    console.log(searchText);


    searchField.value= '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data.meals));
}



function displaySearch(meals){
    const search = document.getElementById('result-search');
    search.textContent='';
    for(const meal of meals){
        console.log(meal);
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card" onclick="loadInfo(${meal.idMeal})">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div  class="card-body">
                
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,180)}</p>
                </div>
              </div>
        `
        search.appendChild(div);
    }
}

function loadInfo(mealId){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayInfo(data.meals[0]));
}

function displayInfo(meal){
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML= `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
              <a target="_blank" href="${meal.strYoutube}" class="btn btn-primary">More Details</a>
            </div>
    `
    mealDetails.appendChild(div);

}