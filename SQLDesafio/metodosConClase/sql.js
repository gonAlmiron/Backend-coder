import knex from 'knex';

class ClientSql {
    constructor(config) {
        this.knex = knex(config)
    }

    async createTable() {
        await this.knex.schema.dropTableIfExists('ecommerce')
        await this.knex.schema.createTable('ecommerce' table => {
            table.increments('id').primary();
            table.string('name', 50).notNullable();
            table.string('code', 100).notNullable();
            table.integer('price');
            table.integer('stock');
        })
    }

    getAllProducts() {
        return this.knex.from('ecommerce').select('*')
    }
}