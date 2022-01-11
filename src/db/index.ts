import { Sequelize } from 'sequelize';

const dbClient = new Sequelize(
    process.env.POSTGRES_DB || "geo-database",
    process.env.POSTGRES_USER || "postgres",
    process.env.POSTGRES_PASSWORD || "postgres", {
    host: process.env.DB_HOST || "localhost",
    dialect: 'postgres'
});

export default dbClient;