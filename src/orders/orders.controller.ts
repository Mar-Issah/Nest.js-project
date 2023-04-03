import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  //automatially instantiates a sericise which is used in our CRUD functions below
  constructor(private readonly orderService: OrdersService) {}

  @Get()
  getOrders(@Query('name') name: 'rice' | 'banku') {
    // const service = new OrdersService();
    return this.orderService.getOrders(name);
  }

  @Get(':id')
  getOrder(@Param('id') id: number) {
    return { success: `I have ID: ${id}` };
  }

  @Post()
  createOrder(@Body() formData: CreateOrderDto) {
    return { name: formData.name };
  }

  @Put(':id')
  upadteOrder(@Param('id') id: number, @Body() updateOrder: UpdateOrderDto) {
    return { sucess: 'updated!' };
  }
  @Delete(':id')
  deleteOrder(@Param('id') id: number) {
    return { sucess: `deleted ID: ${id} !` };
  }
}
