import orderModel from "../models/orderModels.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//creamos la orden con los datos del usuario
const placeOrder = async (req, res) => {

    const frontendUrl = "http://localhost:5173"; //URL del frontend
    try {
       const newOrder = new orderModel({
           userId: req.body.userId,
           items: req.body.items,
           amount: req.body.amount,
           address: req.body.address,
       })
       await newOrder.save(); {/*guardamos la orden en la base de datos*/}
       await userModel.findByIdAndUpdate(req.body.userId, {cartData: []});{/*borramos los items del carrito del usuario*/}
       const line_items = req.body.items.map((item)=>({
              price_data:{
                //Moneda en la que se va a pagar
                currency: "pen", 
                product_data:{
                     name: item.name,
                },
                unit_amount: item.price * 100,
              },
              quantity: item.quantity
         }))

         line_items.push({
             price_data:{
                 currency: "pen",
                 product_data:{
                     name: "Delivery Charges",
                 },
                 unit_amount: 2*100,
             },
             quantity: 1,
         })
         {/*creamos la sesion de pago con stripe
         y le pasamos los items de la orden*/}
         const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url: `${frontendUrl}/verify?succes=true&orderId=${newOrder._id}`,
            cancel_url: `${frontendUrl}/verify?succes=false&orderId=${newOrder._id}`
         })

         res.json({success:true, session_url: session.url})

    } catch (error) {
        console.log("Error al crear la orden: ", error);
        res.json({success:false, message: "Error al crear la orden"})
    }
}
const verifyOrder = async (req, res) => {
    const {orderId,success}=req.body;
    try{
            if(success==="true"){
                await orderModel.findByIdAndUpdate(orderId, {payment:true});
                res.json({success:true, message:"Paid"})


            }
            else{
                await orderModel.findByIdAndDelete(orderId);
                res.json({success:false, message:"Not paid"});

            }
    }catch(error){
        console.log(error);
        res.json({success:false, message:"Error al verificar la orden"})

    }
}


// user orders for fronted

const userOrders= async (req,res)=>{
    try{
        const orders= await orderModel.find({userId:req.body.userId});
        res.json({success:true, data:orders});

    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }


};




export {placeOrder,verifyOrder,userOrders}; 