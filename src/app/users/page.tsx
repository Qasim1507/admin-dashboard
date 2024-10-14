"use client";

import React from "react";

interface User {
  userId: number;
  name: string;
  email: string;
}

const Users = () => {
  const users: User[] = [
    { userId: 16434, name: "John Doe", email: "john@gmail.com" },
    { userId: 28985, name: "Jane Smith", email: "jane@yahoo.com" },
    { userId: 39874, name: "Bob Johnson", email: "bob@outlook.com" },
    { userId: 43453, name: "Alice Brown", email: "alice@gmail.com" },
    { userId: 56456, name: "Charlie Davis", email: "charlie@gmail.com" },
    { userId: 62345, name: "David Wilson", email: "david@outlook.com" },
    { userId: 34534, name: "Emma Taylor", email: "emma@yahoo.com" },
    { userId: 89855, name: "Frank Miller", email: "frank@yahoo.com" },
    { userId: 94984, name: "Grace Lee", email: "grace@yahoo.com" },
    { userId: 10345, name: "Henry Hall", email: "henry@gmail.com" },
    { userId: 11643, name: "Isabella Young", email: "isabella@gmail.com" },
    { userId: 13442, name: "Jack Harris", email: "jack@outlook.com" },
    { userId: 13463, name: "Kathy Lewis", email: "kathy@gmail.com" },
    { userId: 14756, name: "Liam Walker", email: "liam@yahoo.com" },
    { userId: 15756, name: "Mia Robinson", email: "mia@yahoo.com" },
    { userId: 17566, name: "Noah King", email: "noah@outlook.com" },
    { userId: 17567, name: "Olivia Wright", email: "olivia@outlook.com" },
    { userId: 16548, name: "Paul Scott", email: "paul@yahoo.com" },
    { userId: 16459, name: "Quinn Green", email: "quinn@gmail.com" },
    { userId: 20654, name: "Ryan Adams", email: "ryan@gmail.com" },
  ];

  return (
    <div className="bg-white bg-opacity-50 p-6 h-full w-full rounded-lg shadow-md flex flex-col relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-600 text-2xl font-extrabold">User List</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-gray-700 font-semibold">User ID</th>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold">User Name</th>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold">Email</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {users.map((user) => (
              <tr key={user.userId}>
                <td className="px-4 py-2 text-lg text-gray-700">{user.userId}</td>
                <td className="px-4 py-2 text-lg text-gray-700">{user.name}</td>
                <td className="px-4 py-2 text-lg text-gray-700">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;