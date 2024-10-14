"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

interface Product {
  productId: number;
  name: string;
  price: number;
  rating: number;
  stockQuantity: number;
}

const Inventory = () => {
  const products: Product[] = [
    { productId: 98734, name: "Nike Air Jordan 1", price: 699.99, rating: 4.5, stockQuantity: 30, category: "Sneakers", brand: "Nike", description: "Classic Air Jordan sneaker with retro design." },
    { productId: 23489, name: "Adidas Yeezy Boost 350", price: 1299.99, rating: 4.8, stockQuantity: 15, category: "Lifestyle", brand: "Adidas", description: "Comfortable, stylish Yeezy with Boost cushioning." },
    { productId: 54354, name: "Converse Chuck Taylor All Star", price: 199.99, rating: 4.2, stockQuantity: 50, category: "Sneakers", brand: "Converse", description: "Timeless canvas sneaker, perfect for casual wear." },
    { productId: 93847, name: "Nike Air Max 90", price: 549.99, rating: 1.7, stockQuantity: 8, category: "Sneakers", brand: "Nike", description: "Cushioned sneaker with Air Max comfort." },
    { productId: 28475, name: "Adidas Stan Smith", price: 299.99, rating: 4.3, stockQuantity: 40, category: "Tennis", brand: "Adidas", description: "Iconic tennis shoe with minimalist design." },
    { productId: 18234, name: "Puma Suede Classic", price: 249.99, rating: 3.4, stockQuantity: 25, category: "Sneakers", brand: "Puma", description: "Suede material with timeless Puma style." },
    { productId: 38474, name: "New Balance 990", price: 499.99, rating: 4.6, stockQuantity: 20, category: "Running", brand: "New Balance", description: "Premium running shoe with durability and comfort." },
    { productId: 64523, name: "Vans Old Skool", price: 199.99, rating: 4.1, stockQuantity: 60, category: "Skateboarding", brand: "Vans", description: "Classic skate shoe with canvas and suede upper." },
    { productId: 93212, name: "Balenciaga Triple S", price: 1599.99, rating: 4.9, stockQuantity: 10, category: "Luxury", brand: "Balenciaga", description: "Chunky, oversized luxury sneaker." },
    { productId: 49324, name: "Asics Gel-Lyte III", price: 299.99, rating: 3.5, stockQuantity: 18, category: "Running", brand: "Asics", description: "Comfortable running shoe with Gel cushioning." },
    { productId: 85674, name: "Nike Cortez", price: 349.99, rating: 4.3, stockQuantity: 35, category: "Casual", brand: "Nike", description: "Classic casual sneaker with retro design." },
    { productId: 76843, name: "Reebok Classic Leather", price: 229.99, rating: 4.4, stockQuantity: 45, category: "Lifestyle", brand: "Reebok", description: "Soft leather upper for a timeless look." },
    { productId: 34123, name: "Fila Disruptor II", price: 189.99, rating: 2.0, stockQuantity: 50, category: "Lifestyle", brand: "Fila", description: "Chunky design with iconic retro look." },
    { productId: 42153, name: "Nike LeBron 17", price: 799.99, rating: 4.7, stockQuantity: 12, category: "Basketball", brand: "Nike", description: "High-performance basketball shoe for ultimate support." },
  ];

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered products based on search query
  const filteredProducts = products.filter((product) =>
    product.productId.toString().includes(searchQuery)
  );

  const getRatingBadge = (rating: number) => {
    if (rating >= 4.5) {
      return <span className="px-2 py-1 text-lg font-semibold leading-tight text-green-800 bg-green-100 rounded-full">Excellent</span>;
    } else if (rating >= 4.0) {
      return <span className="px-2 py-1 text-lg font-semibold leading-tight text-blue-800 bg-blue-100 rounded-full">Good</span>;
    } else {
      return <span className="px-2 py-1 text-lg font-semibold leading-tight text-yellow-800 bg-red-100 rounded-full">Bad</span>;
    }
  };

  return (
    <div className="bg-white bg-opacity-50 p-6 h-full w-full rounded-lg shadow-md flex flex-col relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-600 text-2xl font-extrabold">Product Inventory</h2>
        <div className="relative">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Start typing to search products"
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-500" size={20} />
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div>
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
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
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
