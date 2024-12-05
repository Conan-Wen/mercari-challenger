import { Module } from '@nestjs/common';
import { databaseProvider } from './db-providers/database.provider';

@Module({
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class DbModule {}
