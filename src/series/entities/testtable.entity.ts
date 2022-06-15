import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Testtable {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('text', { name: 'test1', nullable: true })
  test1: string | null;

  @Column('text', { name: 'test2', nullable: true })
  test2: string | null;
}
