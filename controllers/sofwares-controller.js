import{ productoSofware} from "../servicios/sofwareService.js";
import { formatPrice } from "../formatterPrices.js";


const nuevoSofware = (name, price, imageUrl, id) => {
const card = document.createElement
("div");

const contenido = `
  
  <div class= "sofware"> 
  <img src="${imageUrl}" alt="img">
  <h1 class="sofware-name"> ${name} </h1>
  <p class="precio">${formatPrice(price)}</p>
  </div>`;

card.innerHTML = contenido;
card.dataset.id = id;

return card;
};

const sofware = document.querySelector("[data-sofware]");

const render = async () => {
 try {
 const listaSofwares = await productoSofware.listaSofwares();
   listaSofwares.forEach((sofw) => {
    sofware.appendChild(
      nuevoSofware(
        sofw.name,
        sofw.price,
        sofw.imageUrl,
        sofw.id
        )
      );
    });
   } catch (error) {
    console.log(error);
  }
};

 render();
