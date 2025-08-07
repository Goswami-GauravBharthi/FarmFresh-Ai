// server.js
import express from 'express'
import AuthRouter from './routes/Auth.route.js';
import dotenv from 'dotenv'
import connectDB from './util/db.js';
import productRoute from './routes/product.routes.js';
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());



app.use(AuthRouter);

app.use("/product",productRoute)
// Start server
await connectDB();
app.listen(PORT, () => {
  console.log("Server is Running");
  console.log(`http://localhost:${PORT}`);
})
