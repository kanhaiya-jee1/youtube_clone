import dotenv from "dotenv"
import connectDB from "./db/index";

dotenv.config({
    path: '/env' 
})
  

connectDB()











//   Method to database connect

/*import express from "express";
const app = express()
( async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${Db_NAME}`)
      app.on("error", (error) =>{
        console.log("Error:", error);
        throw error
      })

      app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      })
    } catch (error) {
        console.error("Error:", error)
        throw  err
    }
}) */