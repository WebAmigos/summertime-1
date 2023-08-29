import { Controller, Get, Param, Post, Body, Put, Patch, Delete } from '@nestjs/common';
import { Review } from './review.entity';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/CreateReviewDto';

@Controller('reviews')
export class ReviewController {
  constructor(private reviewsService: ReviewService) { }

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  finOne(@Param('id') id: number): Promise<Review> {
    return this.reviewsService.findOne(id);
  }

  @Post()
  create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    console.log('data: ', createReviewDto);
    return this.reviewsService.create(createReviewDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() review: Review,
  ) {
    await this.reviewsService.update(id, review);
  }

  @Patch('activate/:id')
  async activate(
    @Param('id') id: number
  ) {
    return this.reviewsService.activate(id)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.reviewsService.remove(id);
  }
}