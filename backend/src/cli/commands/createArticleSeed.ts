import { Command, CommandRunner } from 'nest-commander';
import { ArticleService } from '../../modules/article/article.service';
import { articlesSeed } from '../seed-data/articles-seed';

@Command({
  name: 'createArticleSeed',
})
export class CreateArticleSeed extends CommandRunner {
  constructor(private readonly articleService: ArticleService) {
    super();
  }

  async run(): Promise<void> {
    await this.articleService.save(articlesSeed);
  }
}
