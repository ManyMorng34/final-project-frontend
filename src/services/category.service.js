"use server";
import { headerTokenFormData } from "@/app/api/headerToken";

export const getCategoryService = async () => {
  const header = await headerTokenFormData();
  const res = await fetch("http://localhost:1000/api/category", {
    headers: header,
    next: { tags: ["category"] },
  });
  const data = await res.json();
  return data;
};
