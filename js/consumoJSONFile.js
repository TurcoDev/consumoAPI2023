import { showCharacters } from "./showCharaters.js";

fetch('../assets/json/rickAndMorty.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    showCharacters(data.results);
  });
