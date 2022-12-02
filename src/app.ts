import connectToDB from "./database/database";
connectToDB();
import express from "express";
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
import cors from "cors";
import router from "./routes/userRouter";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
