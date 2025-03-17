import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_Url);
        console.log("MongoDB Database Connected", conn.connection.host)
    }
    catch (err) {
        console.error("Error:", err.message)
        process.exit(1) //1 means code exit with failure, 0 mean succcess
    }
}