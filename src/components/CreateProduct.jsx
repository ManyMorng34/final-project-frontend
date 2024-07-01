"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Toast from "./ToastComponent";
import { getCategoryService } from "@/services/category.service";
import { createProductAction } from "@/action/product-action";

const CreateProduct = ({ onClose }) => {
  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategoryService();
      if (result.status === "OK") {
        setCategories(result.payload);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("stockQuantity", stockQuantity);
    formData.append("category", category);
    formData.append("imageFile", imageFile);

    const result = await createProductAction(formData);

    if (result.status === "CREATED") {
      setToastMessage(result.message || "Product created successfully!");
      setIsError(false);
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
        onClose();
        router.push(`/product/${result.payload.productId}`);
      }, 1000);
    } else {
      setToastMessage(result.detail || "Failed to create product!");
      setIsError(true);
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 1000);
    }
  };

  return (
    <div className="flex items-center bg-gray-600 bg-opacity-25 justify-center fixed inset-0 z-50 w-full">
      <div className="w-full max-w-lg p-6 border bg-white rounded-lg shadow-xl relative h-auto">
        <Toast
          message={toastMessage}
          type={isError ? "error" : "success"}
          show={toastVisible}
          onClose={() => setToastVisible(false)}
        />
        <div className="flex justify-between items-center mb-9 mt-3">
          <h2 className="text-2xl font-bold text-gray-600">Create Product</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="block w-full px-4 py-4 mb-4 border border-blue-800 rounded-md focus:outline-none text-gray-700"
            placeholder="Enter product name"
            required
          />
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block w-full px-4 py-4 mb-4 border border-blue-800 rounded-md focus:outline-none text-gray-700"
            placeholder="Enter price"
            required
          />
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full px-4 py-4 mb-4 border border-blue-800 rounded-md focus:outline-none text-gray-700"
            placeholder="Enter description"
            required
          />
          <input
            type="number"
            id="stockQuantity"
            name="stockQuantity"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            className="block w-full px-4 py-4 mb-4 border border-blue-800 rounded-md focus:outline-none text-gray-700"
            placeholder="Enter stock quantity"
            required
          />
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full px-4 py-4 mb-4 border border-blue-800 rounded-md focus:outline-none text-gray-700"
            required
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryName}
              </option>
            ))}
          </select>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="block w-full px-4 py-4 mb-4 border border-blue-800 rounded-md focus:outline-none text-gray-700"
            accept="image/*"
            required
          />
          <div className="flex justify-end space-x-4 mt-7">
            <button
              className="px-6 py-3 font-semibold text-blue-800 border border-blue-800 hover:border-blue-300 rounded-md hover:bg-purple-50 focus:outline-none"
              type="button"
              onClick={onClose}
            >
              No
            </button>
            <button
              className="px-6 py-3 font-semibold text-white bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Create product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
