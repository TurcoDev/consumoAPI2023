export function showCharacters(charaters) {
  const charaterList = document.querySelector('#charaterList');
  
  charaters.forEach(element => {
    charaterList.innerHTML += `
    <li>
      <p class='parrafo'>${element.name}</p>
      <img src='${element.image}'>
    </li>`
  });
  // for tradicional
  // for (let index = 0; index < charaters.length; index++) {
  //   const element = charaters[index].name;
  //   charaterList.innerHTML += `<li>${element}</li>`
  // }
}