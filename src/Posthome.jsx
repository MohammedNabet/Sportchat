import React, { useState } from "react";
import { FaShare } from "react-icons/fa";

const Posthome = ({ posts }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  return (
    <div>
      {posts.map((post, index) => {
        const isExpanded = !!expanded[index];
        const truncatedText =
          post.postText.length > 300
            ? post.postText.slice(0, 300) + "..."
            : post.postText;

        return (
          <div
            key={index}
            className="flex flex-col justify-start max-w-xl gap-4 p-4 bg-white shadow-xl rounded-xl md:flex-row"
          >
            <div className="flex items-start my-2 md:m-0">
              <div className="relative">
                <a href="#" className="relative block">
                  <img
                    alt="profile"
                    src={post.profileImage}
                    className="mx-auto object-cover rounded-full h-10 w-10"
                  />
                </a>
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className={`absolute bottom-0 right-0 ${post.ver} -mx-1 -my-1 text-white bg-black rounded-full fill-current`}
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path>
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center ml-2">
                <span className="flex items-center text-sm text-gray-600 ">
                  {post.profileName}
                  <span className="block w-2 h-2 ml-1 bg-green-500 rounded-full"></span>
                </span>
                <span className="text-xs text-gray-400">{post.timeAgo}</span>
              </div>
            </div>
            <p className="text-black leading-snug md:leading-normal">
              {isExpanded ? post.postText : truncatedText}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleExpand(index);
                }}
                className="text-yellow-500"
              >
                {isExpanded ? " Show Less" : " Show More"}
              </a>
              <br />
              <a href="#" className="text-yellow-500">
                {post.hashtags}
              </a>
            </p>
            {post.postImage && (
              <div className="relative">
                <img
                  src={post.postImage}
                  className="w-full rounded-xl md:w-auto md:max-h-40"
                  alt="post"
                />
                <span className="absolute px-2 py-1 text-xs text-white rounded bg-gray-700/50 right-2 bottom-2">
                  7 min
                </span>
              </div>
            )}
            <div className="flex flex-col justify-between">
              <div className="flex items-start justify-between my-2 text-gray-700 md:m-0">
                <p className="text-xl leading-5">{post.title}</p>
                <button className="text-yellow-400 hover:text-yellow-600">
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center my-2 text-xs text-gray-500 md:m-0">
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="mr-1"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"></path>
                </svg>
                {post.views} views
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="ml-4 mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
                </svg>
                {post.likes} likes
                <FaShare className="ml-4 mr-2" />
                {post.shares} shares
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posthome;
