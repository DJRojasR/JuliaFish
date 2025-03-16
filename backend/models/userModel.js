import mongose from 'mongoose';
const userSchema=new mongose.Schema({
	name:{type:String,required:true},
	email:{type:String,required:true,unique:true},
	password:{type:String,required:true},
	cartData:{type:Object,default:{}}
},{mijimize:false});
const userModel=mongose.model.user || mongose.model('user',userSchema);
export default userModel;