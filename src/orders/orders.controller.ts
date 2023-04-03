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
  UseGuards,
} from '@nestjs/common';
import { SiyaOrderGuard } from 'src/siya-order/siya-order.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
//@UseGuards(SiyaOrderGuard)	//if we want to use it generally on all our routes then call it here
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
  @UseGuards(SiyaOrderGuard) //to use it on the post route
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
