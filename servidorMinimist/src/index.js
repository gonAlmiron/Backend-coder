import minimist from 'minimist';

console.log('BUUUUUUENAS') 

const optionalArgsObject = {
    alias: {
        m: 'modo',
        p: 'port',
        d: 'debug'

    },
    default: {
        port: 6100,
        modo: 'prod'
    }
};

const args = minimist(process.argv.slice(2), optionalArgsObject)

console.log(args)
