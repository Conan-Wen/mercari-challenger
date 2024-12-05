import { Provider } from '@nestjs/common';
import { dbConstants } from '../db.constants';
import { dataSource } from 'src/data-sources/dataSource';

export const databaseProvider: Provider = {
  provide: dbConstants.DATABASE,
  useFactory: async () => await dataSource.initialize(),
};
