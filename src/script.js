function showAnswer(response) {
  let poem = document.querySelector(".poem-container");
  poem.innerHTML = response.data.answer;
}

function getInputAnswer(event) {
  event.preventDefault();

  let inputValue = document.querySelector("#search-input");
  inputValue = inputValue.value;

  let prompt = `${inputValue}`;
  let apiKey = "8bc029ce07bb99a925obf42d966t543f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
}

let searchEngine = document.querySelector("#form-container");
searchEngine.addEventListener("submit", getInputAnswer);
