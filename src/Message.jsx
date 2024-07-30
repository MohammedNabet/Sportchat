import { useNavigate } from "react-router-dom";
import React from "react";


const members = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "John Lorin",
    email: "john@example.com",
  },
  // Add more members as needed
];

export default function Message() {
  const navigate = useNavigate();

  const handleClick = (email) => {
    navigate("./message"); // Navigate to the MessageDetail page with the email as a parameter
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="items-start justify-between sm:flex">
        <div>
          <br />
          <h4 className="text-gray-800 text-xl font-semibold">Messages ...</h4>
        </div>
      </div>
      <ul className="mt-4 divide-y">
        {members.map((item, idx) => (
          <li
            key={idx}
            className="py-5 cursor-pointer" // Added cursor pointer for better UX
            onClick={() => handleClick(item.email)} // Pass email to the handleClick function
          >
            <div className="flex gap-3">
              <img
                src={item.avatar}
                alt={`Avatar of ${item.name}`}
                className="flex-none w-12 h-12 rounded-full"
                onError={(e) =>
                  (e.currentTarget.src = "default-avatar-url.jpg")
                } // Replace with your default avatar URL
              />
              <div>
                <span className="block text-sm text-gray-700 font-semibold">
                  {item.name}
                </span>
                <span className="block text-sm text-gray-600">
                  {item.email}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
