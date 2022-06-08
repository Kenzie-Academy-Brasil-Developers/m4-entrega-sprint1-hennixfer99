import listUserService from "../services/listUsers.service";

const listUserController = (req, res) => {
    
    try{
       const users = listUserService()
       return res.status(200).json(users)
       
   }catch(error){

        return res.status(401).json("teste")

   }
}

export default listUserController