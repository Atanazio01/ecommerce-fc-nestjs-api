import { Order } from './order.entity';
import { Product } from '../../products/entities/product.entity';
export declare class OrderItem {
    id: number;
    quantity: number;
    price: number;
    product: Product;
    product_id: string;
    order: Order;
}
