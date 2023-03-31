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

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(@Query('type') type: string) {
    return [{ type: `Type: ${type}` }];
  }

  @Get(':id')
  getOrder(@Param('id') id: number) {
    return { success: `I have ID: ${id}` };
  }

  @Post()
  createOrder(@Body() formData) {
    return { sucess: 'created!' };
  }

  @Put(':id')
  upadteOrder(@Param('id') id: number) {
    return { sucess: 'updated!' };
  }
  @Delete(':id')
  deleteOrder(@Param('id') id: number) {
    return { sucess: `deleted ID: ${id} !` };
  }
}
