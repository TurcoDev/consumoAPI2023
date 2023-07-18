import { showCharacters } from "./showCharaters.js";

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    showCharacters(data.results);
    
    // for (let index = 0; index < data.results.length; index++) {
    //   const element = data.results[index].name;
    //   document.write(element);
    // }
    // console.log(data.results[0].name);
  });

