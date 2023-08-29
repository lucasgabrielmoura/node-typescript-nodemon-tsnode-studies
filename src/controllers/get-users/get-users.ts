import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController{
    
    constructor(private readonly getUsersRepository: IGetUsersRepository){} //Essa config no parametro é o mesmo que declarar fora e dentro do constructor só que mais simplificado.

    async handle() {
        try{
            //validar requisição Controller
            //direcionar a chamada para a interface que é o Repository
            const users = await this.getUsersRepository.getUsers()

            return {
                statusCode: 200,
                body: users,
            }
        } catch (error){
            return{
                statusCode: 500,
                body: "Server error"
            }
        }
    }
}