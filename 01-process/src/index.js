
const parametros = process.argv.slice(2);

console.log('Argumentos recibidos:')
console.log(parametros)

const datos = {
    datos: {
        numeros: [1, 2, 3, 4, 5],
        promedio: 'el promedio',
        max: 'max',
        min: 'min',
        ejecutable: console.log(process.execPath),
        pid: console.log(process.pid)
    }
}