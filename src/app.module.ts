import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [OrdersModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
