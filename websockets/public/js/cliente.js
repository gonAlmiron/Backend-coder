const socket = io.connect();

const form = document.getElementById('formulario');
const author = document.getElementById('username');
const text = document.getElementById('texto');

form.addEventListener('submit', (ev) => {
    ev.preventDefault(); // esto es clave para evitar que el form quede en blanco

    console.log('Se ejecuto el submit')


    const cartaParaElServer = {
        author: author.value,
        text: text.value,
    }

    console.log(cartaParaElServer)

    socket.emit('nombreDeEvento', cartaParaElServer)

    
    author.value = '';
    text.value = ''; // CON ESTO RESETEAMOS EL INPUT LUEGO DEL SUBMIT
    })

    socket.on('respuesta', (data) => {
        console.log(`El server me respondio con ${JSON.stringify(data)}`)
    })

