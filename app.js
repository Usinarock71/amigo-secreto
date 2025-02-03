let listaAmigos = []
let amigoSecreto = ""
let resultado = Math.floor(Math.random(listaAmigos.length));

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

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}