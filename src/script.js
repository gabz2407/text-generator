function showAnswer(response) {
  new Typewriter(".poem-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function getInputAnswer(event) {
  event.preventDefault();

  let hiddenElement = document.querySelector(".poem-container");
  hiddenElement.classList.remove("hidden");
  hiddenElement.innerHTML = `Loading...`;

  let inputValue = document.querySelector("#search-input");
  inputValue = inputValue.value;

  let prompt = `${inputValue}`;
  let context = `Add in the end of each answer "<b> AI Text Generator</b>"`;
  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
}

let searchEngine = document.querySelector("#form-container");
searchEngine.addEventListener("submit", getInputAnswer);
