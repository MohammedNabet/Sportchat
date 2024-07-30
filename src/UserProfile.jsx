import React from "react";
import Posthome from "./Posthome";
import { SlPicture } from "react-icons/sl";

const posts = [
  {
    id: 1,
    profileImage: "./ra.jpg",
    profileName: "Real Madrid C.F",
    timeAgo: "1 week ago",
    postText:
      " Spain are through to the #EURO2024 final! ¡España, a la final de la #EURO2024 🇪🇸 2-1 🇫🇷👉 Dani Carvajal👉 Nacho Fernández Iglesias👉 Joselu",
    hashtags: "#CoupeduTrone #EURO2024",
    postImage: "./rapost.jpg",
    views: "123,344,893",
    likes: "45,876",
    shares: "45,876",
    title: "ES VS FR",
  },
  {
    id: 1,
    profileImage: "./ra.jpg",
    profileName: "Real Madrid C.F",
    timeAgo: "1 week ago",
    postText:
      " ears ago today, we presented Dani Carvajal as a Real Madrid C.F. player! 🙌 ¡Hace 11 años presentamos a Carvajal!",
    hashtags: "#RealFootball  #OTD",
    postImage: "./post2.jpg",
    views: "123,344,893",
    likes: "45,876",
    shares: "45,876",
    title: "Eyears ago today",
  },
  {
    id: 1,
    profileImage: "./ra.jpg",
    profileName: "Real Madrid C.F",
    timeAgo: "1 week ago",
    postText:
      " 🎁🥳 HAPPY BIRTHDAY, Jude Belingham! FELIZ CUMPLEAÑOS, Bellingham!",
    hashtags: "#RealFootball  #OTD",
    postImage: "./post3.jpg",
    views: "123,344,893",
    likes: "45,876",
    shares: "45,876",
    title: "HAPPY BIRTHDAY,Jude Belingham",
  },
];
function UserProfile() {
  return (
    <div className="bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col justify-center items-center my-5">
        <div
          className="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full "
          style={{
            backgroundImage: "url('./ra.jpg')",
          }}
        ></div>
        <span className="my-3">
          <div className="flex">
            @_Real_Madrid_C.F
            <div className="relative -left-24">
              <svg
                width="10"
                height="10"
                fill="currentColor"
                className="absolute bottom-2 left-28 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-black rounded-full fill-current 	"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path>
              </svg>
            </div>
          </div>
        </span>

        <div className="flex gap-10 text-sm">
          <div className="flex flex-col items-center">
            <span className="font-bold">10</span>
            <span>Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">1.20 K</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">100 K</span>
            <span>Likes</span>
          </div>
        </div>

        <div className="flex">
          <button className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400">
            Edit profile
          </button>
        </div>

        <p className="mb-3 text-center">
          <p className="text-xs text-center	">
            Official profile of Real Madrid C.F. 15 times European Champions.{" "}
            <br />
            FIFA Best Club of the 20th Century.
          </p>
        </p>
      </div>
      <div class="flex m-2">
        <div class="flex-none w-14 ...">
          <img
            alt="profile"
            src="./ra.jpg"
            className="mx-auto object-cover rounded-full h-10 w-10"
          />
        </div>
        <div class="flex-initial w-64 ...">
          <div className="flex justify-center items-center  bg-gray-100">
            <input
              type="text"
              className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              placeholder="Enter text here"
            />
          </div>
        </div>
        <div class="flex-initial w-32 ...">
          <SlPicture className="h-6 w-6 m-2 relative -right-1 " />
        </div>
      </div>
      <Posthome posts={posts} />
    </div>
  );
}

export default UserProfile;
