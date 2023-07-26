import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  user: string;

  @Column('text')
  content: string;

  @Column({ default: false })
  isActive: boolean;
}
