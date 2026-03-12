// FORMULARIO

document.getElementById("formulario").addEventListener("submit", function(e){

e.preventDefault()

let nombre = document.getElementById("nombre").value
let email = document.getElementById("email").value
let mensaje = document.getElementById("mensaje").value

if(nombre === "" || email === ""){

alert("Por favor completa los campos")

return

}

document.getElementById("respuesta").innerText =
"Gracias " + nombre + ", tu mensaje fue enviado correctamente."

this.reset()

})



// BOTON VOLVER ARRIBA

let boton = document.getElementById("btnArriba")

window.onscroll = function(){

if(document.documentElement.scrollTop > 200){

boton.style.display = "block"

}else{

boton.style.display = "none"

}

}



boton.addEventListener("click", function(){

window.scrollTo({

top:0,
behavior:"smooth"

})

})