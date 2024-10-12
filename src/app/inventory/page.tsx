"use client";

import React from "react";
import { Plus } from 'lucide-react';

interface Product {
  productId: number;
  name: string;
  price: number;
  rating: number;
  stockQuantity: number;
}

const Inventory = () => {
  const products: Product[] = [
    { productId: 1, name: "Smartphone", price: 699.99, rating: 4.5, stockQuantity: 30 },
    { productId: 2, name: "Laptop", price: 1299.99, rating: 4.8, stockQuantity: 15 },
    { productId: 3, name: "Headphones", price: 199.99, rating: 4.2, stockQuantity: 50 },
    { productId: 4, name: "Camera", price: 549.99, rating: 4.7, stockQuantity: 8 },
    { productId: 5, name: "Smartwatch", price: 299.99, rating: 4.3, stockQuantity: 40 },
  ];

  const getRatingBadge = (rating: number) => {
    if (rating >= 4.5) {
      return <span className="px-2 py-1 text-lg font-semibold leading-tight text-green-800 bg-green-100 rounded-full">Excellent</span>;
    } else if (rating >= 4.0) {
      return <span className="px-2 py-1 text-lg font-semibold leading-tight text-blue-800 bg-blue-100 rounded-full">Good</span>;
    } else {
      return <span className="px-2 py-1 text-lg font-semibold leading-tight text-yellow-800 bg-yellow-100 rounded-full">Average</span>;
    }
  };

  const handleAddRecord = () => {
    // Handle the addition of a new record here
    console.log("Add new record");
  };

  return (
    <div className="bg-white bg-opacity-50 p-6 h-full w-full rounded-lg shadow-md flex flex-col relative">
      <h2 className="text-gray-600 text-2xl font-extrabold mb-4">Product Inventory</h2>
      <button
        onClick={handleAddRecord}
        className="absolute top-4 right-4 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition duration-200"
        aria-label="Add Product"
      >
        <Plus />
      </button>
      <table className="min-w-full bg-white rounded-xl shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left text-gray-700 font-semibold">ID</th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold">Product Name</th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold">Price</th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold">Rating</th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold">Stock Quantity</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {products.map((product, index) => (
            <tr
              key={product.productId}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition duration-200`}
            >
              <td className="px-4 py-2 text-lg text-gray-700">{product.productId}</td>
              <td className="px-4 py-2 text-lg text-gray-700">{product.name}</td>
              <td className="px-4 py-2 text-lg text-gray-700">${product.price.toFixed(2)}</td>
              <td className="px-4 py-2">{getRatingBadge(product.rating)}</td>
              <td className="px-4 py-2 text-lg text-gray-700">{product.stockQuantity} units</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
