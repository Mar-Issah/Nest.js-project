import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
@Injectable()
export class OrdersService {
  private orders = [
    { id: 0, name: 'rice', quantity: 5 },
    { id: 1, name: 'banku', quantity: 3 },
  ];

  getOrders(name?: 'rice' | 'banku') {
    // if an optional parameter is passed then filter it else retun the entire array
    if (name) {
      return this.orders.filter((order) => order.name === name);
    }
    return this.orders;
  }

  //to implement the find one order
  getOrder(id: number) {
    const order = this.orders.find((order) => order.id === id);

    if (!order) throw new Error('Order not found');

    return order;
  }

  //to implement the POST. we are using the CreateOrderDto we created kind of a mdel /interface
  createOrder(formData: CreateOrderDto) {
    const newOrder = { ...formData, id: Date.now() };
    this.orders.push(newOrder);

    return newOrder;
  }

  //implement the update. map through the list, return the order which mathses the id and update that order object with the new one. use the getOrder method to return to the user the update order
  updateOrder(id: number, updatedOrder: UpdateOrderDto) {
    this.orders = this.orders.map((order) => {
      if (order.id === id) {
        return { ...order, ...updatedOrder };
      }

      return this.getOrder(id);
    });
  }
}
