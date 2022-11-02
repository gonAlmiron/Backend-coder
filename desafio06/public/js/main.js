// ACA SE USA DOM, DOCUMENT.GETELEMENTBYID('ID DEL FORM')
const socket = io();

form.addEventlistener('submit', (e) => {
    e.preventDefault();

    const nuevoProducto = {
        nombre: nombre.value,
        img: img.value,
        precio: precio.value
    }
    socket.emit('nuevoProducto', nuevoProducto)
})

socket.on('todosLosProductos', async (data) => {
    const productos = await data;
    //aca iria la lista
    
})