import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pandaarchita6:archita0419@cluster0.mffgk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}