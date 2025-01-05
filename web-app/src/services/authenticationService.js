import { getToken, removeToken } from "./localStorageService";

export const logOut = () => {
  removeToken();

  // console.log(getToken());
  
  fetch(`http://localhost:8088/auth/logout`, {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getToken()),
  })
};
