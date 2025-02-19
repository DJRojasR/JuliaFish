import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://je144cc:doraemon123456@cluster0.wqyzr.mongodb.net/julia-fish"
    )
    .then(() => console.log("BD Connected"));
	//me quede en 3.45
};
