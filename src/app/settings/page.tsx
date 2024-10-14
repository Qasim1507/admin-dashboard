"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { Sun, Moon } from "lucide-react";
import { setIsDarkMode } from "@/state";

const Settings = () => {
  const dispatch = useAppDispatch();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [profile, setProfile] = useState({
    username: "john_doe",
    email: "john@example.com",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="bg-white bg-opacity-50 p-6 h-full w-full rounded-lg shadow-md flex flex-col">
      <div className="p-6 space-y-8">
        <h1 className="text-2xl font-extrabold text-gray-700">Settings</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleProfileChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Change Password
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Notifications
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Enable Notifications</span>
            <button
              onClick={handleNotificationsToggle}
              className={`${
                notificationsEnabled ? "bg-green-500" : "bg-gray-400"
              } w-14 h-8 rounded-full relative`}
            >
              <div
                className={`${
                  notificationsEnabled ? "translate-x-6" : "translate-x-0"
                } w-6 h-6 bg-white rounded-full transform transition`}
              />
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Appearance
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Dark Mode</span>
            <button
              onClick={toggleDarkMode}
              className={`${
                isDarkMode ? "bg-green-500" : "bg-gray-400"
              } w-14 h-8 rounded-full relative`}
            >
              <div
                className={`${
                  isDarkMode ? "translate-x-6" : "translate-x-0"
                } w-6 h-6 bg-white rounded-full transform transition`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
