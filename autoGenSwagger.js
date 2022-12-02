const swaggerAutogen = require("swagger-autogen")();
import dotenv from "dotenv";
dotenv.config();
const { HOST } = process.env;

const doc = {
  info: {
    title: "My Blog API",
    description: "Description",
  },
  host: `${HOST}`,
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/userRouter.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
