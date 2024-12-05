import { DataSource } from 'typeorm';
import { dbConstants } from '../db/db.constants';
import { likeConstants } from './like.constants';
import { Like } from './like.entity';

export const articleRepositoryTypeORM = {
  provide: likeConstants.LIKE_REPOSITORY_TYPEORM,
  inject: [dbConstants.DATABASE],
  useFactory: (datasource: DataSource) => datasource.getRepository(Like),
};
