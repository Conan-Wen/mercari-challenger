import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Article } from './article.entity';

@ApiTags('article')
@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) { }

  @ApiOperation({ summary: '求人一覧取得' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: Article,
    isArray: true,
  })
  @Get('/')
  getArticles() {
    return this.articleService.getArticles();
  }
}
