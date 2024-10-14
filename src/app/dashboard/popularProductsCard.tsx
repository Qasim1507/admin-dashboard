import React from "react";

const PopularProductsCard = () => {
  return (
    <div className="bg-white bg-opacity-50 p-6 h-full w-full rounded-lg shadow-md flex flex-col">
      <h2 className="text-gray-600 text-2xl px-[10px] font-extrabold">Popular Products</h2>
      <br/>
      {/* Product 1 */}
    <div className="grid grid-cols-1 gap-3 overflow-y-auto">
      <div className="flex items-center border p-4 rounded-lg shadow-md">
        <img
          src="/favicon.ico"
          alt="Product 1"
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Adidas Superstar</h2>
          <p className="text-gray-600">$229.99</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="flex items-center border p-4 rounded-lg shadow-md">
        <img
          src="/favicon.ico"
          alt="Product 2"
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Nike Air Force 1</h2>
          <p className="text-gray-600">$119.99</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex items-center border p-4 rounded-lg shadow-md">
        <img
          src="/favicon.ico"
          alt="Product 3"
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Puma Suede</h2>
          <p className="text-gray-600">$149.99</p>
        </div>
      </div>
      {/* Product 4 */}
      <div className="flex items-center border p-4 rounded-lg shadow-md">
        <img
          src="/favicon.ico"
          alt="Product 4"
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Reebok Classic Leather</h2>
          <p className="text-gray-600">$289.99</p>
        </div>
      </div>
      {/* Product 5 */}
      <div className="flex items-center border p-4 rounded-lg shadow-md">
        <img
          src="/favicon.ico"
          alt="Product 5"
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">New Balance 990</h2>
          <p className="text-gray-600">$279.99</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PopularProductsCard;
