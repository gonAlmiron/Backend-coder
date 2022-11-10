const nombre = document.querySelector("#nombre");
const precio = document.querySelector("#precio");
const boton = document.querySelector("#boton");


async function postData(url = '', data = {}) {

    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    });
    return response.json();
}

boton.addEventListener('click', async () => {
    try {

        const data = {
            nombre: nombre.value,
            precio: precio.value,
        };

        boton.reset()
        const url = 'http://localhost:8080/api/productos';
        response = await postData(url, data);

    } catch (err) {
        console.log(err)
    }
})
