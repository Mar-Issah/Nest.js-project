import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateTestDto extends PartialType(CreateOrderDto) {}
