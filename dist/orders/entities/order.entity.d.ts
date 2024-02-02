export declare enum OrderStatus {
    PENDING = "pending",
    PAID = "paid",
    FAILED = "failed"
}
export type CreateOrderComand = {
    client_id: number;
    items: {
        product_id: string;
        quantity: number;
    }[];
};
export declare class Order {
    id: string;
    total: number;
    client_id: number;
    status: OrderStatus;
    created_at: Date;
    static create(input: CreateOrderComand): void;
}
