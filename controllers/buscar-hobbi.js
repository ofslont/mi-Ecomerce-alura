//const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());
import { productoHobbies } from "../servicios/hobbies-servicios.js";

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#btnbusca');
const resultado = document.querySelector('#resultado');


const listaHobbies = await productoHobbies.listaHobbies();
//console.log(listaProductos);


const filtrar =()=>{
    //console.log(formulario.value);

resultado.innerHTML = '';

const texto = formulario.value.toLocaleLowerCase();
console.log(texto);
if(texto !==''){
for(let hobbies of listaHobbies){
let nombre = hobbies.name.toLocaleLowerCase();


if(nombre.indexOf(texto) !== -1){
resultado.innerHTML += `
    <li>${hobbies.name} 
    - precio:${hobbies.price}  </li>`

 }
 
 }
if(resultado.innerHTML === ''){
resultado.innerHTML +=`
  <li>Producto no encontrado</li> `
}
}
}

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);

//filtrar();







