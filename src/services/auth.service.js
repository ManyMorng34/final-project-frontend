"use server"
export const loginService = async (userLoginInfo) => {
  const request = await fetch("http://localhost:1000/api/auth/login", {
    method: "POST",
    body: JSON.stringify(userLoginInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await request.json();
  return data;
};

export const registerService = async (userRegisterInfo) => {
  const request = await fetch("http://localhost:1000/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userRegisterInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await request.json();
  return data;
};
