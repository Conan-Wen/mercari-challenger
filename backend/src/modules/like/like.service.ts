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
    const article = await this.articleService.findById(articleId);
    if (!article) {
      throw new Error('Article not found');
    }

    let like = await this.likeRepository.findOne({ where: { article } });
    if (like) {
      return like;
    }

    like = this.likeRepository.create();
    like.article = article;

    return this.likeRepository.save(like);
  }
}
