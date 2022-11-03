const socket = io.connect();

const form = document.getElementById('form');
const inputNombre = document.getElementById('nombre');
const inputImg = document.getElementById('img');
const inputPrecio = document.getElementById('precio')


form.addEventlistener('submit', (e) => {
    e.preventDefault();

    const nuevoProducto = {
        nombre: inputNombre.value,
        img: inputImg.value,
        precio: inputPrecio.value
    }
    socket.emit('nuevoProducto', nuevoProducto)

    console.log(nuevoProducto)

    inputNombre.value = '';
    inputImg.value = '';
    inputPrecio.value = '';
})

socket.on('todosLosProductos', async (data) => {
    const productos = await data;
    // aca iria la lista se puede hacer un innnetHtml con un div x cada producto
    // o lo que seria la tabla
    
})