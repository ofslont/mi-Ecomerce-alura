//const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());
import { productoServices } from "../servicios/producto-servicios.js";
import { productoSofware} from "../servicios/productos-sofwares.js";


const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#btnbusca');
const resultado = document.querySelector('#resultado');


const listaProductos = await productoServices.listaProductos();
const listaSofwares = await productoSofware.listaSofwares();

//console.log(listaProductos);


const filtrar =()=>{
    //console.log(formulario.value);

resultado.innerHTML = '';

const texto = formulario.value.toLocaleLowerCase();
console.log(texto);

if(texto !==''){
for(let producto of listaProductos){
let nombre = producto.name.toLocaleLowerCase();


if(nombre.indexOf(texto) !== -1){
resultado.innerHTML += `
    <li>${producto.name} 
    - precio:${producto.price}  </li>`

 }
}
 
//--------------sofware---------------------
 for(let sofware of listaSofwares){
  let nombre = sofware.name.toLocaleLowerCase();
  
  
  if(nombre.indexOf(texto) !== -1){
  resultado.innerHTML += `
      <li>${sofware.name} 
      - precio:${sofware.price}  </li>`
  
   }
   
   }
  
} 
 
if(resultado.innerHTML === ''){
resultado.innerHTML +=`
  <li>Producto no encontrado</li> `
}

}

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);

//filtrar();







