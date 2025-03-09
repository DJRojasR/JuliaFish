import foodModel from '../models/foodModels.js';
import fs from 'fs';

//Añadiendo fooditem 
const addFood = async (req, res) => {
    let image_filename = '${req.file.filename}';
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    })
    try{
        await food.save();
        res.json({sucess:true, message: 'Food item added successfully'});
    }catch(error){
        res.json({success: false, message: error.message});
    }
}
export { addFood };