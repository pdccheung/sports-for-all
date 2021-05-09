import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

const app = express()
dotenv.config()

connectDB()


app.get('/', (req, res) => {
    res.send("API is running")
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const ENV = process.env.NODE_ENV

app.listen(PORT, console.log(`server running in ${ENV} mode on port ${PORT}`))
