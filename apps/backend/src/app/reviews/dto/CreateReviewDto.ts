import { IsNotEmpty } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  content: string;
}
