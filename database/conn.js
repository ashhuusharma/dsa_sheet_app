import mongoose from "mongoose";

// mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
        });
    } catch (error) {
        console.log("error :", error);
    }
};

export default connectDB;