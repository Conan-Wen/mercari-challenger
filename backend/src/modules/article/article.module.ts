import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { DbModule } from '../db/db.module';
import { ArticleService } from './article.service';
import { articleRepositoryTypeORM } from './article.repository.typeorm';

@Module({
  imports: [DbModule],
  providers: [ArticleService, articleRepositoryTypeORM],
  controllers: [ArticleController],
})
export class ArticleModule {}
