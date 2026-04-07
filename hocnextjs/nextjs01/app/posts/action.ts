"use server";
import { headers } from "next/headers";
export const getAuthStatus = async () => {
  const allHeaders = await headers();
  console.log(allHeaders.get("token"));

  return allHeaders.get("token") === "true";
};
