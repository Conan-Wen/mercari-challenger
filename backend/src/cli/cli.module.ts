import { Module } from '@nestjs/common';
import { CreateArticleSeed } from './commands/createArticleSeed';
import { ArticleModule } from '../modules/article/article.module';

@Module({
  imports: [ArticleModule],
  providers: [CreateArticleSeed],
})
export class CliModule {}
