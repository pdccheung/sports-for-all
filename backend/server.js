import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"


const app = express()
app.use(express.json())

dotenv.config()

connectDB()


app.get('/', (req, res) => {
    res.send("API is running")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const ENV = process.env.NODE_ENV

app.listen(PORT, console.log(`server running in ${ENV} mode on port ${PORT}`))
