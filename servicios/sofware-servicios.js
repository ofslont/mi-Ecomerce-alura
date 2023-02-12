//GET
const listaSofwares = () =>
  fetch("http://localhost:3000/sofware")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUnSofware = (id) => {
  return fetch(`http://localhost:3000/sofware/${id}`).then((resposta) => {
    return resposta.json();
  });
};

//POST
const creaSofwares = (name, imageUrl, price) => {
  return fetch(`http://localhost:3000/sofware`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("No fue posible encontrar el producto");
  });
};

// PUT/PATCH
const alteraSofware = async (id, name, price, description) => {
  return fetch(`http://localhost:3000/sofware/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteSofware = async (id) => {
  return await fetch(`http://localhost:3000/sofware/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoSofware = {
  listaSofwares,
  listarUnSofware,
  creaSofwares,
  alteraSofware,
  deleteSofware,
};
