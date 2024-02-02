import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private orderRepo;
    constructor(orderRepo: Repository<Order>);
    create(createOrderDto: CreateOrderDto): string;
    findAll(): string;
    findOne(id: number): string;
}
