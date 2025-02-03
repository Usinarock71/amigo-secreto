let listaAmigos = []
let amigoSecreto = ""
let contador = listaAmigos.length-1

function agregarAmigo() {
    let amigoDeUsuario = (document.getElementById('amigo').value);

    if (amigoDeUsuario == "") {
        alert("Porfavor, inserte algun nombre.")
    }
    else {
        listaAmigos.push(amigoDeUsuario)
        limpiarCaja()
    }
}

function sortearAmigo() {
    let resultado = Math.floor(Math.random() * listaAmigos.length)
    console.log(resultado)
    alert(listaAmigos[resultado])
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}