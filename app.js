let listaAmigos = []
let amigoSecreto = ""
let contador = listaAmigos.length-1

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let amigoDeUsuario = (document.getElementById('amigo').value);
    let amigoUsuario = document.createElement("li")
    amigoUsuario.textContent = amigoDeUsuario

    if (amigoDeUsuario == "") {
        alert("Porfavor, inserte algun nombre.")
    }
    else {
        listaAmigos.push(amigoDeUsuario)
        document.getElementById("listaAmigos").appendChild(amigoUsuario)
        limpiarCaja()
    }
}


function sortearAmigo() {
    let resultado = Math.floor(Math.random() * listaAmigos.length)

    if (listaAmigos.length < 0) {
        alert("Porfavor, inserte al menos un nombre primero")
    } 
    else {
        console.log(resultado)
        alert(listaAmigos[resultado])
        asignarTextoElemento("resultado", listaAmigos[resultado]);
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}