import React from "react";

const Navigationmatch = ({ user, onClick }) => (
  <div className="userItem shadow-lg rounded-xl ">
    <button
      onClick={() => onClick(user.id)}
      className="w-56 text-center  p-2  rounded-xl "
    >
      <div className="flex text-center">
        <img src={user.img} alt="" className="w-10" />
        <p className="text-center p-2 font-bold ">{user.name}</p>
      </div>
    </button>
  </div>
);

export default Navigationmatch;
