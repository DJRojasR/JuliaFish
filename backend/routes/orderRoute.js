import express from 'express'; //exprees es un framework de nodejs
import authMiddleware from '../middleware/auth.js'; //importamos el middleware de autenticacion
import { placeOrder, userOrders, verifyOrder } from '../controllers/orderController.js';

const orderRouter = express.Router(); //creamos un router con express
orderRouter.post('/place', authMiddleware, placeOrder); //creamos una ruta post para crear una orden
orderRouter.post('/verify',verifyOrder); //creamos una ruta post para verificar la orden
orderRouter.post("/userorders",authMiddleware,userOrders)

export default orderRouter; //exportamos el router
