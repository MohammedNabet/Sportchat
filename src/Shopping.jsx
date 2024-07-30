import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import { TiShoppingCart } from "react-icons/ti";


const CartItem = ({ item, updateQuantity }) => (
  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    <img src={item.image} alt="product" className="w-full rounded-lg sm:w-40" />
    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
      <div className="mt-5 sm:mt-0">
        <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
        <div className="flex">
          <img
            src={item.imagelogo}
            alt=""
            className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
          />
          <p className="mt-1 text-xs font-bold text-gray-700 p-2">
            {item.nameequipe}
          </p>
          <p className="mt-1 text-xs font-bold text-gray-700 p-2">
            {item.prix}
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
        <div className="flex items-center border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">{item.prix}</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="group relative h-10 w-36 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
           
            <span className="relative text-black group-hover:text-white">
              Ajouter
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function Shopping() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-shirt Maroc 2024",
      nameequipe: "maroc national",
      prix: "123.89 MAD",
      price: 259.0,
      quantity: 2,
      image: "./maroc.jpg",
      imagelogo: "./m.jpeg",
    },
    {
      id: 2,
      name: "T-shirt France 2024",
      nameequipe: "France national",
      prix: "80.89 MAD",
      price: 259.0,
      quantity: 2,
      image: "./tfr.jpeg",
      imagelogo: "./fr.jpeg",
    },
    {
      id: 3,
      name: "T-shirt Real Madrid 2024",
      nameequipe: "real madrid",
      prix: "123.89 MAD",
      price: 259.0,
      quantity: 2,
      image: "./tr.jpeg",
      imagelogo: "./real.png",
    },
    // ... other items
  ]);

  const [statusUsers, setStatusUsers] = useState([
    {
      id: 1,
      name: "Tout",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 2,
      name: "Promotion",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 3,
      name: "Natinall",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 4,
      name: "Coupe De Monde",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 5,
      name: "User 5",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar5.png",
    },
    // ... other users with unique ids
  ]);

  const [search, setSearch] = useState("");

  const filteredCartItems = cartItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleNavigation = (userId) => {
    // Handle navigation or action based on userId
    console.log(`Navigate to user with ID: ${userId}`);
    // For example, you could open a profile or navigate to a different route
  };

  return (
    <div className="h-screen bg-white-100 pt-5">
      <div className="flex p-5">
        <div className="flex-none w-14">
          <h1>MassShopping</h1>
        </div>
        <div className="flex-initial w-64"></div>
        <div className="flex-initial w-32">
          <h1>APP</h1>
        </div>
      </div>

      <div className="userContainer">
        {statusUsers.map((user) => (
          <NavigationButton
            key={user.id}
            user={user}
            onClick={() => handleNavigation(user.id)}
          />
        ))}
      </div>
      <br />
      <div className="flex items-center max-w-md mx-auto bg-gray-100 rounded-lg">
        <div className="w-full bg-gray-100">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none bg-gray-100"
            placeholder="Search"
          />
        </div>
        <div>
          <button
            type="submit"
            className={`flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg ${
              search.length > 0
                ? "bg-yellow-500"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={search.length === 0}
            aria-label="Search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <br />
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {filteredCartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={(id, amount) => {
                // Placeholder for updateQuantity function, as it is not used in CartItem currently
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
