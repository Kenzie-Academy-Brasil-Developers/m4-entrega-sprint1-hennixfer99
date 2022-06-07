import listUserService from "../services/listUsers.service";

const listUserController = (req, res) => {
    const users = listUserService()

    return res.status(201).json(users)
}

export default listUserController