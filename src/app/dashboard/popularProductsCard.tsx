import React from "react";

const PopularProductsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 overflow-y-auto">
      <h2 className="text-gray-600 text-2xl px-[10px] font-extrabold">Popular Products</h2>
      {/* Product 1 */}
      <div className="flex items-center border p-4 rounded-lg shadow-md">
        <img
          src="/favicon.ico"
          alt="Product 1"
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Product 1</h2>
          <p className="text-gray-600">$29.99</p>
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
          <h2 className="text-lg font-semibold">Product 2</h2>
          <p className="text-gray-600">$19.99</p>
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
          <h2 className="text-lg font-semibold">Product 3</h2>
          <p className="text-gray-600">$49.99</p>
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
          <h2 className="text-lg font-semibold">Product 4</h2>
          <p className="text-gray-600">$89.99</p>
        </div>
      </div>
    </div>
  );
};

export default PopularProductsCard;
