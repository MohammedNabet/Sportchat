import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [color, setColor] = useState("bg-red-500");

  useEffect(() => {
    const colors = ["bg-red-500", "bg-white"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setColor(colors[currentIndex]);
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`min-h-screen ${color} flex items-center justify-center transition-colors duration-[5000ms]`}
    >
      <h1 className="text-4xl font-bold text-gray-900">E-Ultras Winners</h1>
    </div>
  );
};

export default Dashboard;
