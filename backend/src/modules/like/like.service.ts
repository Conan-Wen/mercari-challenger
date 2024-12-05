import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { likeConstants } from './like.constants';
import { Like } from './like.entity';
import { ArticleService } from '../article/article.service';

@Injectable()
export class LikeService {
  constructor(
    @Inject(likeConstants.LIKE_REPOSITORY_TYPEORM)
    private readonly likeRepository: Repository<Like>,
    private readonly articleService: ArticleService,
  ) {}

  async addLike(articleId: number): Promise<Like> {
    const like = this.likeRepository.create();

    const article = await this.articleService.findById(articleId);
    if (!article) {
      throw new Error('Article not found');
    }

    like.article = article;

    return this.likeRepository.save(like);
  }
}
