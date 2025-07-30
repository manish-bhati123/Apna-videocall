import express from "express";
import cookieParser from 'cookie-parser'
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import {connectToSocket}  from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./Routes/users.routes.js";  

const app = express();
app.use(cookieParser())
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8080))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);


const start = async () => {
    app.set("mongo_user")
  const connectionDb = await mongoose.connect("mongodb+srv://manishbhatimithre:9983manishbhati@cluster0.bkayggr.mongodb.net/");
  console.log(`MONSO Connected DB HOst:${connectionDb.connection.host}`)
server.listen(app.get("port"),()=>{
    console.log("LISTENIN ON PORT 8080")
});
 }

 start();