import express from "express";
import { GetUsersController } from "./controllers/getUsers/getUsers";
import { PostgresGetUsersRepository } from "./repositories/getUsers/postgresGetUsers";

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Escutando da porta ${port}!`));

app.get("/users", async (req, res) => {
  const postgresGetUsersRepository = new PostgresGetUsersRepository();
  const getUserController = new GetUsersController(postgresGetUsersRepository);

  const response = await getUserController.handle();

  res.send(response.body).status(response.statusCode);
});
