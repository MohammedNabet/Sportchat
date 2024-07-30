import React from "react";

const NavigationButton = ({ user, onClick }) => (
  <div className="userItem  ">
    <button
      onClick={() => onClick(user.id)}
      className="w-40 text-center bg-gray-100 p-2"
    >
      {user.name}
    </button>
  </div>
);

export default NavigationButton;
