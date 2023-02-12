// const listaSofwares = () => fetch("http://localhost:3000/sofware").then(respuesta => respuesta.json());



const listaSofwares = () =>
  fetch("//localhost:3000/sofware")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

    export const productoSofware = {
    listaSofwares
};