import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsInt,
  IsDecimal,
  IsDate,
  IsUrl,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @ApiProperty({
    description: '求人掲示ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: '求人のタイトル',
    example: 'アルバイト募集',
  })
  @IsString()
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @ApiProperty({
    description: 'より詳細な仕事内容',
    example: '店舗での接客と簡単な事務作業',
  })
  @IsString()
  @Column({ type: 'text', nullable: false })
  job_detail: string;

  @ApiProperty({
    description: '応募者の資格条件',
    example: '18歳以上',
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  applicant_eligibility?: string;

  @ApiProperty({
    description: '応募締切日時',
    example: '2024-12-31T23:59:59',
  })
  @IsDate()
  @IsOptional()
  @Column({ type: 'datetime', nullable: true })
  application_deadline?: Date;

  @ApiProperty({
    description: '報酬額',
    example: 1500.0,
  })
  @IsDecimal()
  @IsOptional()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  payment?: number;

  @ApiProperty({
    description: '交通費',
    example: 500.0,
  })
  @IsDecimal()
  @IsOptional()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  transportation_fee?: number;

  @ApiProperty({
    description: '勤務地情報（駅名など）',
    example: '新宿駅',
  })
  @IsString()
  @Column({ type: 'varchar', nullable: false })
  location: string;

  @ApiProperty({
    description: 'アクセス情報（距離など）',
    example: '駅から徒歩5分',
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  access?: string;

  @ApiProperty({
    description: '募集人数',
    example: 3,
  })
  @IsInt()
  @IsOptional()
  @Column({ type: 'int', nullable: true })
  recruitment_quota?: number;

  @ApiProperty({
    description: '現在の応募者数',
    example: 0,
    default: 0,
  })
  @IsInt()
  @Column({ type: 'int', default: 0, nullable: true })
  current_applicants: number;

  @ApiProperty({
    description: '勤務日',
    example: '2024-12-15',
  })
  @IsDate()
  @IsOptional()
  @Column({ type: 'date', nullable: true })
  work_date?: Date;

  @ApiProperty({
    description: '勤務開始時間',
    example: '09:00:00',
  })
  @IsOptional()
  @Column({ type: 'time', nullable: true })
  start_time?: string;

  @ApiProperty({
    description: '勤務終了時間',
    example: '18:00:00',
  })
  @IsOptional()
  @Column({ type: 'time', nullable: true })
  end_time?: string;

  @ApiProperty({
    description: '求人イメージ画像URL',
    example: 'https://example.com/image.jpg',
  })
  @IsUrl()
  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  image_url?: string;
}
