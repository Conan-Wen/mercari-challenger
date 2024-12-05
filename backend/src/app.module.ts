import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { CliModule } from './cli/cli.module';
import { LikeModule } from './modules/like/like.module';

@Module({
  imports: [ArticleModule, CliModule, LikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
