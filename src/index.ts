import express from "express";
import { config } from "dotenv";

const app = express();

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`Escutando da porta ${port}!`))

app.get("/", (req, res) => {
    res.send("Hello World Node+Typescript")
})