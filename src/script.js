// recipe
function showAnswer(response) {
  new Typewriter(".recipe-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0,
    cursor: "",
  });
}

function searchPrompt(keyword) {
  const recipeBlock = document.querySelector(".recipe-container");
  recipeBlock.classList.remove("hidden");
  recipeBlock.innerHTML = `Wait a second, we are preparing your dish...`;

  const prompt = `Provide a ${keyword} recipe`;
  const context = `You are a well known food expert, you can show me your skills about world foods. Please answer in this format:<h3>Recipe Name</h3><br /> <h5>Ingredients:</h5><ul><li>Ingredients list</li></ul><h5>Instructions:</h5><p></p>`;

  const apiKey = "8bc029ce07bb99a925obf42d966t543f";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
}

function getInputAnswer(event) {
  event.preventDefault();

  let inputValue = document.querySelector("#search-input");
  inputValue = inputValue.value;

  searchPrompt(inputValue);
}

const searchEngine = document.querySelector("#form-container");
searchEngine.addEventListener("submit", getInputAnswer);

// out of ideas buttons
function searchVegan() {
  searchPrompt("VEGAN");
}

const vegan = document.querySelector(".vegan");
vegan.addEventListener("click", searchVegan);

function searchVegetarian() {
  searchPrompt("VEGETARIAN");
}

const vegetarian = document.querySelector(".vegetarian");
vegetarian.addEventListener("click", searchVegetarian);

function searchCarnivore() {
  searchPrompt("CARNIVORE");
}

const carnivore = document.querySelector(".carnivore");
carnivore.addEventListener("click", searchCarnivore);

function searchPescatarian() {
  searchPrompt("PESCATARIAN");
}

const pescatarian = document.querySelector(".pescatarian");
pescatarian.addEventListener("click", searchPescatarian);
