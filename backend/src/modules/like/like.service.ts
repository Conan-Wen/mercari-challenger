import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { likeConstants } from './like.constants';
import { Like } from './like.entity';
import { ArticleService } from '../article/article.service';
import axios from 'axios';

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

  async analyze(): Promise<{ result: string }> {
    const likes = await this.likeRepository.find({ relations: ['article'] });

    let promp = '';
    for (const like of likes) {
      promp += `title: ${like.article.title}\ndescription: ${like.article.job_detail}\n\n`;
    }

    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content:
              'ユーザは以下のアルバイトに興味があります。そこから、このユーザはどんな性格かを推測してください。（200程度でまとめてください)\nユーザを呼ばずに、第二人称を使ってください。',
          },
          { role: 'user', content: promp },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      },
    );

    console.log(res.data.choices[0].message.content);

    return { result: res.data.choices[0].message.content };
  }
}
