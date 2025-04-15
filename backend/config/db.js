import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://DJRojasR:Mongodb2025@cluster0.8qqyr.mongodb.net/food-del", {
    });
    console.log("🔥 Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error en la conexión a MongoDB:", error);
    process.exit(1); // Sale del proceso si hay error
  }
};
