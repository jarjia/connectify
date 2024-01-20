import axios from "./axios";
import { UserCreateData } from "./types";

export const postCreateUser = (data: UserCreateData) => {
  return axios.post("register", data);
};
