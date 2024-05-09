function showAnswer(response) {
  new Typewriter(".poem-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function getInputAnswer(event) {
  event.preventDefault();

  let hiddenElement = document.querySelector(".poem-container");
  hiddenElement.classList.remove("hidden");
  hiddenElement.innerHTML = `Wait a second, we are preparing your dish...`;

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
