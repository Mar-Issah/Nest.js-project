import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [
    { id: 0, name: 'rice', quantity: 5 },
    { id: 1, name: 'banku', quantity: 3 },
  ];

  getOrders(name?: 'rice' | 'banku') {
    if (name) {
      return this.orders.filter((order) => order.name === name);
    }
    return this.orders;
  }
}
