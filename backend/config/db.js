import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      ""
    )
    .then(() => console.log("BD Connected"));
	//me quede en 3.45
};
