import{ productoHobbies} from "../servicios/hobbies-servicios.js";
import { formatPrice } from "../formatterPrices.js";


const nuevoHobbie = (name, price, imageUrl, id, descripcion) => {
const card = document.createElement
("div");

const contenido = `
  
  <div class= "hobbie"> 
  <img src="${imageUrl}" alt="img">
  <h1 class="hobbie-name"> ${name} </h1>
  <p class="precio">${formatPrice(price)}</p>
  <p class="descripcion"> ${descripcion}</p>
  </div>`;

card.innerHTML = contenido;
card.dataset.id = id;

return card;
};

const hobbie = document.querySelector("[data-hobbies]");

const render = async () => {
 try {
 const listaHobbies = await productoHobbies.listaHobbies();
 listaHobbies.forEach((hobb) => {
    hobbie.appendChild(
        nuevoHobbie(
            hobb.name,
            hobb.price,
            hobb.imageUrl,
            hobb.id,
            hobb.description
        )
      );
    });
   } catch (error) {
    console.log(error);
  }
};

 render();
