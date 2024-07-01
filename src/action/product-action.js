"use server";
import { createProductService } from "@/services/product.service";
import { revalidateTag } from "next/cache";

export const createProductAction = async (formData) => {
  // Extracting form data
  const productName = formData.get("productName");
  const price = formData.get("price");
  const description = formData.get("description");
  const stockQuantity = formData.get("stockQuantity");
  const category = formData.get("category");
  const imageFile = formData.get("imageFile");

  // Calling the service with the extracted data
  const result = await createProductService(
    productName,
    price,
    description,
    stockQuantity,
    category,
    imageFile
  );

  revalidateTag("product");
  return result;
};
