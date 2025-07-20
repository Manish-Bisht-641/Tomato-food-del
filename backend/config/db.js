import mongoose, { Mongoose } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manishbishtdb:manishdb321@cluster0.2lnqx9f.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}