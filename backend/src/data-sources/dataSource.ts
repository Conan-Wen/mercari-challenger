import { DataSource } from 'typeorm';
import { Article } from '../modules/article/article.entity';

export const dataSource = new DataSource({
  type: 'mariadb',
  entities: [Article],
  migrations: [],
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true, // 本番環境はfalseにして、手動でマイグレーションを実行する
});
