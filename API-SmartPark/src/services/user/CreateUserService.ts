import prismaClient from "../../prisma";
interface UserRequest {
 name: string;
 email: string;
 password: string;
 CNH: string;
}
class CreateUserService {
 async execute({ name, email, password , CNH}: UserRequest) {
 //verifica email ja cadastrado
 const userJaExiste = await prismaClient.user.findFirst({
 where: {
 email: email
 }
 })
 if (userJaExiste) {
    throw new Error("user ja existe")
    }
    const user = await prismaClient.user.create(
        {
        data: {
        name: name,
        email: email,
        password: password,
        CNH: CNH
        },
        select:{
        id:true,
        name:true,
        email:true
        }
        }
        ) 
    return user
    }
}
export { CreateUserService } 
