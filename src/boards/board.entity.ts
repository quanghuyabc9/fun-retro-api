import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("board")
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  _name: string;

  @Column()
  _context: string;

  @Column()
  dateCreated: Date;

  @Column() 
  url: string;

  @Column()
  userId: number;
}