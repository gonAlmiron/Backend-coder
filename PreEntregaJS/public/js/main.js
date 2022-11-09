const form = document.getElementById('form');
const inputNombre = document.getElementById('nombre');
const inputImg = document.getElementById('img');
const inputPrecio = document.getElementById('precio')


if (form) {


    form.addEventlistener('submit', (e) => {
        e.preventDefault();
    
        const nuevoProducto = {
            nombre: inputNombre.value,
            img: inputImg.value,
            precio: inputPrecio.value
        }
    
        console.log(nuevoProducto)
    
        inputNombre.value = '';
        inputImg.value = '';
        inputPrecio.value = '';
    })
}