
let personajes = ['Mi caballo', 'Mi hijo', 'El vecino', 'Mi amigo'];
let acciones = ['destruyo', 'se llevo', 'se inclino', 'tiró'];
let objetos = ['mis documentos', 'mi libro', 'el techo'];
let momentos = ['en la mañana', 'en la tarde', 'en la noche', 'mientras caminaba', 'cuando dormía'];


function obtenerIndiceAleatorio(longitud) {
    return Math.floor(Math.random() * longitud); 
}


function generarMensaje() {
    let personaje = personajes[obtenerIndiceAleatorio(personajes.length)];
    let accion = acciones[obtenerIndiceAleatorio(acciones.length)];
    let objeto = objetos[obtenerIndiceAleatorio(objetos.length)];
    let momento = momentos[obtenerIndiceAleatorio(momentos.length)];

    return personaje + ' ' + accion + ' ' + objeto + ' ' + momento + '.';

}


function mostrarExcusa() {
    document.getElementById('excuse').innerHTML = generarMensaje();
}


window.onload = mostrarExcusa;


document.getElementById('generateExcuse').addEventListener('click', mostrarExcusa);
