let listaAmigos = []
let amigoSecreto = ""
let contador = listaAmigos.length-1

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let amigoDeUsuario = document.getElementById('amigo').value;

    if (amigoDeUsuario == "") {
        alert("Porfavor, inserte algun nombre.")
    }
    else {
        listaAmigos.push(amigoDeUsuario)
        mostrarLista()
        limpiarCaja()
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let pos = 0

    while(pos < listaAmigos.length) {
        lista.innerHTML += "<li>" + listaAmigos[pos] + "</li>"
        pos++
    }
}


function sortearAmigo() {
    let resultado = Math.floor(Math.random() * listaAmigos.length)

    if (listaAmigos.length < 0) {
        alert("Porfavor, inserte al menos un nombre primero")
    } 
    else {
        console.log(resultado)
        asignarTextoElemento("resultado", listaAmigos[resultado]);
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}