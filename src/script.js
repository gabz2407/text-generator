let prompt = "How is the weather in London today";
let context =
  "As you are very knowledgeable in weather condition, please help me with this question";
let apiKey = "8bc029ce07bb99a925obf42d966t543f";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
