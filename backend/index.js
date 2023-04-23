const express = require("express");
const { connection } = require("./configs/db");
const { productRouter } = require("./routes/productRoute");

const app = express();
app.use(express.json());
app.use("/", productRouter);

app.listen(8080, async () => {
  await connection;
  console.log("Connected to the DataBase");
});
