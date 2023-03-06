import { Sequelize } from "sequelize";
import config from "../config";

export const db = new Sequelize(
  config.database.NAME, 
  config.database.USER, 
  config.database.PASSWORD, 
  {
    host: config.database.HOST,
    dialect: 'mysql',
    logging: true
  }
)