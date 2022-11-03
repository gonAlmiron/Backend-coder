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



    socket.emit('nombreDeEvento', cartaParaElServer)

    console.log(cartaParaElServer)

    socket.on('notificacionPersonal', () => {
        console.log('Recibiste la notificacion')
    })

    author.value = '';
    text.value = ''; // CON ESTO RESETEAMOS EL INPUT LUEGO DEL SUBMIT
    })

