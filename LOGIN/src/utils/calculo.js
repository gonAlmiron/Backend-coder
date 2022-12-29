
const random = (cantidad = 10000000) => {
    const salida = [];
    for(let i=0, i<cantidad, i++) {
        salida.push(Math.random())
    }
}

process.on('message', (cantidad) => {
    if(!cantidad)
    random()
    else
    random(cantidad)
})