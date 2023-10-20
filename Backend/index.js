import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {PORT, mongodbURL} from "./config.js";
import {Book} from "./model/book.js";
import bookRoutes from "./routes/booksRoutes.js";


const app = express();

app.use(express.json());

/* app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
})); */
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the book store project");
});

app.use("/", bookRoutes);

mongoose.connect(mongodbURL).then(()=>{
    console.log("App connected to database");
    app.listen(PORT, ()=>{
        console.log(`App is listening to port number ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
});
