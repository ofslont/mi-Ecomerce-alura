const listaHobbies = () =>
  fetch("//localhost:3000/hobbies")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

    export const productoHobbies = {
    listaHobbies
};