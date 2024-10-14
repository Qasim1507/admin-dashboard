import React from "react";

interface Item {
  id: number;
  name: string;
  purchaseDate: string;
  status: "PLACED" | "IN TRANSIT" | "DELIVERED" | "RETURNED";
  quantity: number;
}

const LatestSales = () => {
  const items: Item[] = [
    { id: 1, name: "New Balance 990", purchaseDate: "2024-09-10", status: "PLACED", quantity: 1 },
    { id: 2, name: "Nike Dunk Low", purchaseDate: "2024-09-09", status: "IN TRANSIT", quantity: 3 },
    { id: 3, name: "Vans Old Skool", purchaseDate: "2024-1-08", status: "DELIVERED", quantity: 2 },
    { id: 4, name: "Adidas Stan Smith", purchaseDate: "2024-10-07", status: "RETURNED", quantity: 2 },
    { id: 5, name: "Vans Old Skool", purchaseDate: "2024-10-06", status: "PLACED", quantity: 1 },
    { id: 6, name: "Asics Gel-Lyte III", purchaseDate: "2024-03-05", status: "DELIVERED", quantity: 1 },
    { id: 7, name: "Balenciaga Triple S", purchaseDate: "2024-10-04", status: "IN TRANSIT", quantity: 2 },
    { id: 8, name: "Nike SB Dunk", purchaseDate: "2024-02-03", status: "DELIVERED", quantity: 3 },
    { id: 9, name: "Fila Disruptor II", purchaseDate: "2024-10-02", status: "RETURNED", quantity: 2 },
    { id: 10, name: "Nike Air Presto", purchaseDate: "2024-09-01", status: "PLACED", quantity: 1 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PLACED":
        return <span className="px-2 py-1 text-lg font-semibold leading-tight text-blue-800 bg-blue-100 rounded-full">PLACED</span>;
      case "IN TRANSIT":
        return <span className="px-2 py-1 text-lg font-semibold leading-tight text-red-800 bg-yellow-100 rounded-full">IN TRANSIT</span>;
      case "DELIVERED":
        return <span className="px-2 py-1 text-lg font-semibold leading-tight text-green-800 bg-green-100 rounded-full">DELIVERED</span>;
      case "RETURNED":
        return <span className="px-2 py-1 text-lg font-semibold leading-tight text-yellow-800 bg-red-100 rounded-full">RETURNED</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white bg-opacity-50 p-6 h-full w-full rounded-lg shadow-md flex flex-col">
      <h2 className="text-gray-600 text-2xl font-extrabold mb-4">Latest Purchased Items</h2>
      <table className="min-w-full bg-white rounded-xl shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left text-gray-700 font-semibold">Item Name</th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold">Purchase Date</th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold">Status</th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold">Quantity</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition duration-200`}
            >
              <td className="px-4 py-2 text-lg text-gray-700">{item.name}</td>
              <td className="px-4 py-2 text-lg text-gray-700">{item.purchaseDate}</td>
              <td className="px-4 text-lg py-2">{getStatusBadge(item.status)}</td>
              <td className="px-4 py-2 text-lg text-gray-700">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestSales;
