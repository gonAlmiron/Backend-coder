import knex from 'knex';

class ClientSql {
    constructor(config) {
        this.knex = knex(config)
    }

    async createTable() {
        await this.knex.schema.dropTableIfExists('ecommerce')
        await this.knex.schema.createTable('ecommerce', table => {
            table.increments('id').primary();
            table.string('name', 50).notNullable();
            table.string('code', 100).notNullable();
            table.integer('price');
            table.integer('stock');
        })
    }

    async getAllProducts() {
        return await this.knex.select('*').from('ecommerce')
    }
    async insertProduct() {
        await this.knex('ecommerce').insert(product)
    }
    async close() {
        await this.knex.destroy();
    }
}

export default ClientSql;