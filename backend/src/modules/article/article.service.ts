import { Inject, Injectable } from '@nestjs/common';
import { articleConstants } from './article.constants';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @Inject(articleConstants.ARTICLE_REPOSITORY_TYPEORM)
    private readonly articleRepository: Repository<Article>,
  ) {}

  getArticles(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  save(articles: Article[]): Promise<Article[]> {
    return this.articleRepository.save(articles);
  }

  async findById(articleId: number): Promise<Article | undefined> {
    const article = await this.articleRepository.findOne({
      where: {
        id: articleId,
      },
    });

    return article ?? undefined;
  }
}
