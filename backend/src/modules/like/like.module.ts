import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { ArticleModule } from '../article/article.module';
import { DbModule } from '../db/db.module';
import { LikeService } from './like.service';
import { likeRepositoryTypeORM } from './article.repository.typeorm';

@Module({
  imports: [DbModule, ArticleModule],
  providers: [LikeService, likeRepositoryTypeORM],
  controllers: [LikeController],
})
export class LikeModule {}
