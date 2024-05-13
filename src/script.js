// recipe
function showAnswer(response) {
  new Typewriter(".recipe-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0,
    cursor: "",
  });
}

function getInputAnswer(event) {
  event.preventDefault();

  let recipeBlock = document.querySelector(".recipe-container");
  recipeBlock.classList.remove("hidden");
  recipeBlock.innerHTML = `Wait a second, we are preparing your dish...`;

  let inputValue = document.querySelector("#search-input");
  inputValue = inputValue.value;

  let prompt = `Provide a recipe about ${inputValue}`;
  let context = `You are a well known food expert, you can show me your skills about world foods. Please answer in this format:<h3>Recipe Name</h3><br /> <h5>Ingredients:</h5><ul><li>Ingredients list</li></ul><h5>Instructions:</h5><p></p>`;

  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
}

let searchEngine = document.querySelector("#form-container");
searchEngine.addEventListener("submit", getInputAnswer);

// out of ideas buttons
function searchVegan() {
  let recipeBlock = document.querySelector(".recipe-container");
  recipeBlock.classList.remove("hidden");
  recipeBlock.innerHTML = `Wait a second, we are preparing your dish...`;

  let prompt = `Provide a VEGAN recipe`;
  let context = `You are a well known food expert, you can show me your skills about world foods. Please answer in this format:<h3>Recipe Name</h3><br /> <h5>Ingredients:</h5><ul><li>Ingredients list</li></ul><h5>Instructions:</h5><p></p>`;

  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
}

let vegan = document.querySelector(".vegan");
vegan.addEventListener("click", searchVegan);

function searchVegetarian() {
  let recipeBlock = document.querySelector(".recipe-container");
  recipeBlock.classList.remove("hidden");
  recipeBlock.innerHTML = `Wait a second, we are preparing your dish...`;

  let prompt = `Provide a VEGETARIAN recipe`;
  let context = `You are a well known food expert, you can show me your skills about world foods. Please answer in this format:<h3>Recipe Name</h3><br /> <h5>Ingredients:</h5><ul><li>Ingredients list</li></ul><h5>Instructions:</h5><p></p>`;

  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
}

let vegetarian = document.querySelector(".vegetarian");
vegetarian.addEventListener("click", searchVegetarian);

function searchCarnivore() {
  let recipeBlock = document.querySelector(".recipe-container");
  recipeBlock.classList.remove("hidden");
  recipeBlock.innerHTML = `Wait a second, we are preparing your dish...`;

  let prompt = `Provide a CARNIVORE recipe`;
  let context = `You are a well known food expert, you can show me your skills about world foods. Please answer in this format:<h3>Recipe Name</h3><br /> <h5>Ingredients:</h5><ul><li>Ingredients list</li></ul><h5>Instructions:</h5><p></p>`;

  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
}

let carnivore = document.querySelector(".carnivore");
carnivore.addEventListener("click", searchCarnivore);

function searchPescatarian() {
  let recipeBlock = document.querySelector(".recipe-container");
  recipeBlock.classList.remove("hidden");
  recipeBlock.innerHTML = `Wait a second, we are preparing your dish...`;

  let prompt = `Provide a PESCATARIAN recipe`;
  let context = `You are a well known food expert, you can show me your skills about world foods. Please answer in this format:<h3>Recipe Name</h3><br /> <h5>Ingredients:</h5><ul><li>Ingredients list</li></ul><h5>Instructions:</h5><p></p>`;

  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
}

let pescatarian = document.querySelector(".pescatarian");
pescatarian.addEventListener("click", searchPescatarian);
