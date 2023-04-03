import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Query,
  Body,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
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

  //cast ALL the id param to a number using the unary plus (+) operator or there wil be errors.
  @Get(':id')
  getOrder(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.orderService.getOrder(id);
    } catch (error) {
      //in built exception handling
      throw new NotFoundException();
    }
  }

  @Post()
  createOrder(@Body(new ValidationPipe()) formData: CreateOrderDto) {
    return this.orderService.createOrder(formData);
  }

  @Put(':id')
  upadteOrder(@Param('id') id: number, @Body() updateOrder: UpdateOrderDto) {
    return this.orderService.updateOrder(+id, updateOrder);
  }
  @Delete(':id')
  deleteOrder(@Param('id') id: number) {
    return this.orderService.removeOrder(+id);
  }
}
