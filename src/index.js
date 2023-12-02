function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
  });
}

function generateJoke() {
  let apiKey = "off12bea02cd1ft1f4f0c632ee3ca6b4";
  let prompt = "generate christmas joke";
  let context =
    "Please use jokes suitable to all ages, no coments and don't repead the same joke.The joke must be provided in HTML format.Example: <p>this is a joke</p>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayJoke);
  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = `Generating a joke for you.. please wait`;
}

let telJoke = document.querySelector("#jokeButton");
telJoke.addEventListener("click", generateJoke);
