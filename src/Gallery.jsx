import React from "react";

const Gallery = () => {
  const images = [
    ["TT.jpg", "./sto.png", "./p.jpeg"],
    [
      "./oip.jpeg",
      "./R.Jpeg",
      "./mas.jpg",
    ],
   
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((src, imgIndex) => (
              <div key={imgIndex}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={src}
                  alt=""
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
