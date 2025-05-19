import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class InventoryMovement {
  @PrimaryGeneratedColumn()
  id!: number; // Se añade "!"

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: "product_id" })
  product!: Product; // Se añade "!"

  @Column({
    type: "enum",
    enum: ["entry", "exit", "adjustment", "waste"],
    default: "entry"
  })
  type!: string; // Se añade "!"

  @Column("decimal", { precision: 10, scale: 2 })
  quantity!: number; // Se añade "!"

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
   date!: Date; // Se añade "!"

  @Column({ nullable: true })
  notes?: string; // Se marca como opcional con "?"
}