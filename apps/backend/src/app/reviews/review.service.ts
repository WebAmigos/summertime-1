import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';

import { Review } from './review.entity';
import { CreateReviewDto } from './dto/CreateReviewDto';

interface Response {
  whatIprocessedIs: {
    success: string
  }
}

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewsRepository: Repository<Review>
  ) { }

  findAll(): Promise<Review[]> {
    return this.reviewsRepository.find({ where: { isActive: true } });
  }

  findOne(id: Review['id']): Promise<Review> {
    return this.reviewsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.reviewsRepository.delete(id);
  }

  /**
   * 
   * @param review Kolejność wykonywania:

1. W postman strzał do API
2. dodanie tego do backencu

Make musi mieć włączony sheduling i reagowanie na każy request

JSON parse w Make

{
"who": "{{2.user}}",
"content": "{{2.review}}"
}

Chat GPT w Make:

I need to determine seintiment in input from {message}. Please return it in proper JSON reposne as follows:

{
"sentiment": {value}
}

where {value} is descibed below:

{{3.content}}
   * @returns 
   */
  async create(createReview: CreateReviewDto): Promise<Review> {
    // try {
    const data = await axios.post<Response>('https://hook.eu1.make.com/r7b6udo6v3nx7kk148k1iq4wim6b7dxu', {
      user: createReview.user,
      review: createReview.content
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('data to send: ', data.data.whatIprocessedIs);

    return this.reviewsRepository.save(createReview);
    // } catch {
    //   throw new Error('Oh no!');
    // }
  }

  async update(id: string, review: Review): Promise<void> {
    await this.reviewsRepository.update(id, review);
  }

  async activate(id: number): Promise<void> {
    try {
      const review = await this.reviewsRepository.findOneByOrFail({ id });
      await this.reviewsRepository.update({ id: review.id }, { isActive: true });
    } catch {
      throw new Error('Review not found');
    }
  }
}