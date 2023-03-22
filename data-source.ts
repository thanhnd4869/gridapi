/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'griddb',
  migrations: ['dist/migrations/*.js'],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
