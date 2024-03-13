import express from "express";
import { connectDB } from "./db/connectDB";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => {
	console.log(`Server Running on port ${PORT}`);
});