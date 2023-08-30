import { QueryTypes } from "sequelize";
import { IGetUsersRepository } from "../../controllers/get-users/protocols"
import { PostgresClient } from "../../database/postgres";
import { User } from "../../models/user"

export class PostgresGetUsersRepository implements IGetUsersRepository{ // Aqui eu criei o repository específico para o Postgres e usei a interface do IGetUsersRepo...

    async getUsers(): Promise<User[]> {
        try {
            const users = await PostgresClient.query<User>("SELECT * FROM pessoas", { type: QueryTypes.SELECT });
            return users
          } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error
          }
    }

}