import React, { useState } from "react";
import Navigationmatch from "./Navigationmatch";

const matchData = [
  {
    id: 1,
    date: "13 - 07 - 2024",
    email: "12:00 pm",
    imageSrc1: "./argentina.jpeg",
    imageSrc2: "./brazil.jpeg",
  },
  {
    id: 2,
    date: "14 - 07 - 2024",
    email: "6:00 pm",
    imageSrc1: "./all.jpeg",
    imageSrc2: "./fr.jpeg",
  },
  {
    id: 3,
    date: "15 - 07 - 2024",
    email: "3:00 pm",
    imageSrc1: "./ispan.jpeg",
    imageSrc2: "./portugal.jpeg",
  },
  {
    id: 4,
    date: "16 - 07 - 2024",
    email: "9:00 pm",
    imageSrc1: "./england.jpeg",
    imageSrc2: "./italy.png",
  },
  {
    id: 5,
    date: "17 - 07 - 2024",
    email: "7:00 pm",
    imageSrc1: "./netherlands.jpeg",
    imageSrc2: "./belgium.jpeg",
  },
  {
    id: 6,
    date: "18 - 07 - 2024",
    email: "5:00 pm",
    imageSrc1: "./uruguay.jpeg",
    imageSrc2: "./chile.png",
  },
  {
    id: 7,
    date: "19 - 07 - 2024",
    email: "8:00 pm",
    imageSrc1: "./colombia.jpeg",
    imageSrc2: "./peru.jpeg",
  },
  {
    id: 8,
    date: "20 - 07 - 2024",
    email: "10:00 pm",
    imageSrc1: "./mex.jpeg",
    imageSrc2: "./amec.jpeg",
  },
  {
    id: 9,
    date: "21 - 07 - 2024",
    email: "4:00 pm",
    imageSrc1: "./japan.jpeg",
    imageSrc2: "./south_korea.jpeg",
  },
  {
    id: 10,
    date: "22 - 07 - 2024",
    email: "2:00 pm",
    imageSrc1: "./australia.jpg",
    imageSrc2: "./new_zealand.jpeg",
  },
];

function MatchList() {
  const [statusUsers, setStatusUsers] = useState([
    {
      id: 1,
      name: "Botola inwi pro",
      img: "./botola.png",
    },
    {
      id: 2,
      name: "La Liga 2024",
      img: "l01.png",
    },
    {
      id: 2,
      name: "Premier League ",
      img: "an.png",
    },
    {
      id: 2,
      name: "cup africa 2025",
      img: "cuppa.jpeg",
    },

    // ... other users with unique ids
  ]);

  const handleNavigation = (userId) => {
    // Handle navigation or action based on userId
    console.log(`Navigate to user with ID: ${userId}`);
    // For example, you could open a profile or navigate to a different route
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="max-w-md bg-white rounded-lg border shadow-md sm:p-8">
        <div className="flex justify-between items-center mb-4 p-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            List Match
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </a>
        </div>

        <div className="userContainer">
          {statusUsers.map((user) => (
            <Navigationmatch
              key={user.id}
              user={user}
              onClick={() => handleNavigation(user.id)}
            />
          ))}
        </div>

        <div className="flow-root p-4">
          <ul role="list" className="divide-y divide-gray-200">
            {matchData.map((match) => (
              <li key={match.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={match.imageSrc1}
                      alt="Match logo"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-center">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {match.date}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {match.email}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={match.imageSrc2}
                      alt="Opponent logo"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MatchList;
