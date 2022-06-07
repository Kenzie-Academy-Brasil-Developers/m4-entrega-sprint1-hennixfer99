import deleteUserService from "../services/deletUser.service";

const deleteUserController = (req, res) => {
  const { uuid } = req.params;

  const deletedUser = deleteUserService(uuid);

  return res.json(deletedUser);
};

export default deleteUserController;
