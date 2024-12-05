import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from '../article/article.entity';

@Entity()
export class Like {
  @ApiProperty({
    description: 'ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: '求人',
    example: 1,
  })
  @IsInt()
  @ManyToOne(() => Article)
  @JoinColumn()
  article: Article;
}
