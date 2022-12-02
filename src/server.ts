import app from "./app";

const { PORT } = process.env;

app.listen(String(PORT), (): void => {
  console.log("App is running at port: " + PORT);
});
