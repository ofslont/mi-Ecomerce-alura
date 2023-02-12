import { productoServices } from "../servicios/producto-servicios.js";
import{ productoSofware} from "../servicios/sofwareService.js";
import { formatPrice } from "../formatterPrices.js";
//<p class="descripcion">${(description)}</p>
const getProducts = (name, price, imageUrl, id, description) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="producto">
        
        <img src="${imageUrl}" alt="img">
        <h1 class="product-name"> ${name} </h1>
        <p class="precio">${formatPrice(price)}</p>
        <p class="descripcion">${description}</p>

        
    </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[data-allProducts]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();

    listaProductos.forEach((producto) => {
      productos.appendChild(
        getProducts(
          producto.name,
          producto.price,
          producto.imageUrl,
          producto.id,
          producto.description

        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();

const nuevoSofware = (name, price, imageUrl, id,description) => {
  const card = document.createElement
  ("div");
  
  const contenido = `
    
    <div class= "sofware"> 
    <img src="${imageUrl}" alt="img">
    <h1 class="sofware-name"> ${name} </h1>
    <p class="precio">${formatPrice(price)}</p>
    <p class="descripcion">${description}</p>
    </div>`;
  
  card.innerHTML = contenido;
  card.dataset.id = id;
  
  return card;
  };
  
  const sofware = document.querySelector("[data-sofware]");
  
  const render2 = async () => {
   try {
   const listaSofwares = await productoSofware.listaSofwares();
     listaSofwares.forEach((sofw) => {
      sofware.appendChild(
        nuevoSofware(
          sofw.name,
          sofw.price,
          sofw.imageUrl,
          sofw.id,
          sofw.description
          )
        );
      });
     } catch (error) {
      console.log(error);
    }
  };
  
   render2();