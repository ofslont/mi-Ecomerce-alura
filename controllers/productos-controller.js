import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";



const nuevoProduto = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="producto">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="precio">${formatPrice(price)}</p>
            <a class="ver-producto" href="../../screens/Todos-los-productos.html?id= ${ id } ">Ver producto</a>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
  
  

};

const productos = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProduto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id
        )
      );
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();
