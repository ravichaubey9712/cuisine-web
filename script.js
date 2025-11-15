let food = document.querySelector('.food');

let indian = document.querySelector('#indian');
let canadian = document.querySelector('#canadian');
let american = document.querySelector('#american');
let british = document.querySelector('#british');
let thai = document.querySelector('#thai');
let russian = document.querySelector('#russian');

let recipe;

const fetchData = async (area) => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await api.json();
    recipe = data.meals;
    console.log("My Recipe =", recipe);
    showData(recipe)
}
fetchData('indian')

let showData = (items) => {
    food.innerHTML = items.map((meal) => `
    <div style="text-align:center">
    <div>
     <img src= "${meal.strMealThumb}" class="img"/>
    </div>
   <h5 style="margin:10px " >${meal.strMeal}</h5>
    </div>
   
    `).join("")
}

indian.addEventListener('click', () => {
    fetchData("indian")
})
canadian.addEventListener('click', () => {
    fetchData("canadian")
})
thai.addEventListener('click', () => {
    fetchData("thai")
})
russian.addEventListener('click', () => {
    fetchData("russian")
})
british.addEventListener('click', () => {
    fetchData("british")
})
american.addEventListener('click', () => {
    fetchData("american")
})

const search = () => {
    let input = document.querySelector("#search");

    input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        let inputVal = input.value;
        
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`);
        const data = await api.json();
        recipe = data.meals;
        showData(recipe);
    }
});
};

search();