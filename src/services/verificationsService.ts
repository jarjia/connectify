import axios from "./axios";

export const postVerifyPhoneNumber = (code: number) => {
  return axios.post("verify-code", {
    code,
  });
};
