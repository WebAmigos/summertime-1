import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Review } from './review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewsRepository: Repository<Review>
  ) {}

  findAll(): Promise<Review[]> {
    return this.reviewsRepository.find({ where: { isActive: true }});
  }

  findOne(id: Review['id']): Promise<Review> {
    return this.reviewsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.reviewsRepository.delete(id);
  }

  async create(review: Review): Promise<Review> {
    return this.reviewsRepository.save(review);
  }

  async update(id: string, review: Review): Promise<void> {
    await this.reviewsRepository.update(id, review);
  }

  async activate(id: number): Promise<void> {
    try {
      const review = await this.reviewsRepository.findOneByOrFail({ id });
      await this.reviewsRepository.update({ id: review.id}, { isActive: true });
    } catch {
      throw new Error('Review not found');
    }
  }
}