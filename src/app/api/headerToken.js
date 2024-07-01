import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]/route";

export const headerToken = async () => {
  const session = await getServerSession(authOptions);
  return {
    authorization: `Bearer ${session?.user?.accessToken}`,
    "Content-Type": "application/json",
  };
};

export const headerTokenFormData = async () => {
  const session = await getServerSession(authOptions);
  return {
    authorization: `Bearer ${session?.user?.accessToken}`,
  };
};
