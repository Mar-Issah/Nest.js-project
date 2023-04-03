import { MinLength, IsEnum } from 'class-validator';

export class CreateOrderDto {
  //define your new order details below
  id: number;

  @MinLength(3)
  @IsEnum(['rice', 'banku'], {
    message: 'use the correct name ie rice or banku',
  })
  name: string;
  quantity: number;
}
