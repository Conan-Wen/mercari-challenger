import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @ApiProperty({
    description: '求人掲示ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;
}
