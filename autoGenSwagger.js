const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My Blog API",
    description: "Description",
  },
  host: "localhost:4000",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/userRouter.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
