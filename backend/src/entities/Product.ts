import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column()
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @Column({
    type: "enum",
    enum: ["bottle", "cap", "label", "bag", "water"],
    default: "water"
  })
  type!: string;

  @Column()
  unit!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  stock_min!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  stock_max!: number;

  @Column("decimal", { precision: 10, scale: 2, default: 0 })
  current_stock!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  unit_price!: number;

  @Column({ default: true })
  active!: boolean;
}