import { DataSource } from 'typeorm';
import { dbConstants } from '../db/db.constants';
import { Article } from './article.entity';
import { articleConstants } from './article.constants';

export const articleRepositoryTypeORM = {
  provide: articleConstants.ARTICLE_REPOSITORY_TYPEORM,
  inject: [dbConstants.DATABASE],
  useFactory: (datasource: DataSource) => datasource.getRepository(Article),
};
