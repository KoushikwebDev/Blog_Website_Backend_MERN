const swaggerAutogen = require("swagger-autogen")();
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
