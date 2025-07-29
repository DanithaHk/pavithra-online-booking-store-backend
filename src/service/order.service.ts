
import type { CreateOrderDTO } from "../dto/order.dto";
import {Order} from "../model/order.model";

export const createOrder = async (orderData: CreateOrderDTO) => {
    const newOrder = new Order(orderData);
    return await newOrder.save();
};

export const getAllOrders = async () => {
    return await Order.find();
};
