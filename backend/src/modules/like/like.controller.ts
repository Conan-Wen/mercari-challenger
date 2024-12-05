import { Controller, HttpStatus, Param, Post } from '@nestjs/common';
import { LikeService } from './like.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Like } from './like.entity';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @ApiOperation({ summary: 'ユーザ好みを保存' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    type: Like,
    isArray: true,
  })
  @ApiParam({
    name: 'articleId',
    required: true,
    type: Number,
  })
  @Post('/:articleId')
  async addLike(@Param('articleId') articleId: number) {
    return this.likeService.addLike(articleId);
  }
}
