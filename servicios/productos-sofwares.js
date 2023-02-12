const listaSofwares = () => fetch("http://localhost:3000/sofware").then(respuesta => respuesta.json());



export const productoSofware = {
    listaSofwares
};
