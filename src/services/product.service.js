"use server";
import { headerTokenFormData } from "@/app/api/headerToken";

export const getProductService = async () => {
  const header = await headerTokenFormData();
  const res = await fetch("http://localhost:1000/api/products", {
    headers: header,
    next: { tags: ["product"] },
  });
  const data = await res.json();
  return data;
};

export async function getProductByIdService(id) {
  const header = await headerTokenFormData();
  const res = await fetch(`http://localhost:1000/api/products/${id}`, {
    headers: header,
    next: { tags: ["product"] },
  });
  const data = await res.json();
  return data;
}

export const createProductService = async (
  productName,
  price,
  description,
  stockQuantity,
  category,
  imageFile
) => {
  console.log(
    "In Service: ",
    productName,
    price,
    description,
    stockQuantity,
    category,
    imageFile
  );
  const header = await headerTokenFormData();
  const formData = imageFile;

  const res = await fetch(
    `http://localhost:1000/api/products?productName=${productName}&price=${price}&description=${description}&stockQuantity=${stockQuantity}&category=${category}`,
    {
      method: "POST",
      headers: {
        ...header,
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    }
  );

  const text = await res.text();
  const data = text ? JSON.parse(text) : {};
  return data;
};
