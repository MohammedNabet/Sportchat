// src/components/TabNavigation.jsx

import React from "react";
import PropTypes from "prop-types";

const TabNavigation = ({ isActive, icon: Icon, label, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer p-2 transition-transform duration-300 ${
        isActive ? "text-yellow-500 transform scale-110" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      <Icon className="mb-1 text-xl" />
      <span className="text-xs">{label}</span>
    </div>
  );
};

TabNavigation.propTypes = {
  isActive: PropTypes.bool.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabNavigation;
