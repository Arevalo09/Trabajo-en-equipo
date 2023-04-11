import { tiposDeComida } from "./arreglo.js";
const filas = document.querySelector(".fila")


const recorrer = Users =>  Users.map(user =>`<tr>
<th scope="row"></th>
<td>${user.id}</td>
<td>${user.comida}</td>
<td>${user.origen}</td>
<td>${user.descripcion}</td>
<td>${user.precio}</td>
</tr>
<tr>`)

function CrearFila(fila){
    console.log(fila)
    const items = recorrer(fila)
    filas.innerHTML=items
}
CrearFila(tiposDeComida)