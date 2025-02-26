import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
	type: "postgres",
	url: process.env.DATABASE_URL,
	synchronize: false,
	logging: false,
	entities: ["src/entities/*.ts"],
	migrations: ["src/migrations/*.ts"],
	migrationsRun: true,
	ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
});
