import {findUserById} from "./user.repository";

export const getUser = async (id: number) => {
  const user = await findUserById(id);
  return user;
};
