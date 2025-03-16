import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {};


const createToken=(id)=>{
	return jwt.sign({id},process.env.JWT_SECRET)
	
}

// register user
const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		//revisando si el usuario ya existe
		const exists=await userModel.findOne({email});
		if(exists){
			return res.json({success:false,message:"Usuario ya existe"});
		}
		
		// validando email y contraseña fuerte
		if(!validator.isEmail(email)){
			return res.json({success:false,message:"Por favor ingresar un email válido"});
		}
		if(password.length<8){
			return res.json({success:false,message:"La contraseña debe tener al menos 8 caracteres"});
		}
		// encriptando la contraseña
		 const salt=await bcrypt.genSalt(10);
		 const hashedPassword=await bcrypt.hash(password,salt);

		const newUser = new userModel({
			
			name: name,
			email: email,
			password: hashedPassword, 
		
		});

		const user=await newUser.save();
		const token=createToken(user._id)
		res.json({success:true,token});





	} catch (error) {
		console.log(error);
		res.json({success:false,message:"Error" })
		
	}
};

export { loginUser, registerUser };
