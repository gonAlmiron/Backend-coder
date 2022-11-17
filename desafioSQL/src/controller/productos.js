import knex from 'knex'

class Productos {
	constructor(config) {
		this.knex = knex(config)
	}
	async createTable() {
        await this.knex.schema.dropTableIfExists('productos')
        await this.knex.schema.createTable('productos', table => {
            table.increments('id').primary();
            table.string('name', 50).notNullable();
            table.integer('price');
            table.integer('stock');
        })
	}
	async getAll() {
		return await this.knex.select('*').from('productos')
	}

	async save() {
		await this.knex('ecommerce').insert(product)
	}
	async close() {
        await this.knex.destroy();
    }
}

const productosController = new Productos();


module.exports = productosController;