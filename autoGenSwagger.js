const swaggerAutogen = require("swagger-autogen")();
const dotenv = require("dotenv");
dotenv.config();
const { HOST } = process.env;

const doc = {
  info: {
    title: "My Blog API",
    description: "Description",
  },
  host: `${HOST}`,
  schemes: ["https", "http"],
  versions: ["v1"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./src/routes/userRouter.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
