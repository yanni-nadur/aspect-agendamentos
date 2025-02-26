import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
	type: "postgres",
	url: process.env.DATABASE_URL,
	synchronize: false,
	logging: true,
	entities: ["dist/entities/*.js"],
	migrations: ["dist/migrations/*.js"],
	ssl: {
		rejectUnauthorized: false,
	},
});
