import { Request, Response } from "express";
import * as OrderService from "../service/order.service";
import type { CreateOrderDTO } from "../dto/order.dto";

export const placeOrder = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const orderData: CreateOrderDTO = req.body;
        const order = await OrderService.createOrder(orderData);
        res.status(201).json({ success: true, order });
    } catch (err) {
        console.error("Error placing order:", err);
        res.status(500).json({ success: false, message: "Order creation failed" });
    }
};

export const getOrders = async (_req: Request, res: Response) => {
    try {
        const orders = await OrderService.getAllOrders();
        res.json({ success: true, orders });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch orders" });
    }
};
