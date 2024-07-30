import { FaStreetView } from "react-icons/fa6";

const members = [
  {
    logo1: "./all.jpeg",
    logo2: "./brazil.jpeg",
    date: "12-12-2024 13:12",
    namber: "12937",
  },
  {
    logo1: "./all.jpeg",
    logo2: "./Logo_Wydad_Athletic_Club.png",
    date: "12-12-2024 13:12",
    namber: "12937",
  },
  {
    logo1: "./all.jpeg",
    logo2: "./brazil.jpeg",
    date: "12-12-2024 13:12",
    namber: "12937",
  },
  {
    logo1: "./all.jpeg",
    logo2: "./brazil.jpeg",
    date: "12-12-2024 13:12",
    namber: "12937",
  },
  {
    logo1: "./all.jpeg",
    logo2: "./brazil.jpeg",
    date: "12-12-2024 13:12",
    namber: "12937",
  },
  {
    logo1: "./all.jpeg",
    logo2: "./brazil.jpeg",
    date: "12-12-2024 13:12",
    namber: "12937",
  },
  {
    logo1: "./all.jpeg",
    logo2: "./brazil.jpeg",
    date: "12-12-2024 13:12",
    namber: "12937",
  },
  {
    logo1: "./all.jpeg",
    logo2: "./brazil.jpeg",
    date: "12-12-2024 13:12",
    namber: "12937",
  },
  {
    logo1: "./all.jpeg",
    logo2: "./brazil.jpeg",
    date: "12-12-2024 13:12",
    namber: "12937",
  },
];

export default function Football() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="items-start justify-between sm:flex">
        <div>
          <br />
          <h4 className="text-gray-800 text-xl font-semibold">
            List Mtch ...
          </h4>
        </div>
        <h1>kl</h1>
      </div>

      <ul className="mt-4 divide-y">
        {members.map((item, idx) => (
          <li key={idx} className="py-5">
            <div class="flex ...">
              <div class="flex-none w-14 h-14 ...">
                <img
                  src={item.logo1}
                  className="flex-none w-12 h-12 rounded-full"
                />
              </div>
              <div class="grow h-14 ...   text-center  font-mono">
                <h1 className="font-bold">{item.date} </h1>

                <div class="flex items-center text-center p-3">
                  <button
                    type="button"
                    class="w-full px-2 py-2 text-base font-medium text-black bg-white border rounded-r-md hover:bg-gray-100"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="w-full px-2 py-2 text-base font-medium text-black bg-white border rounded-r-md hover:bg-gray-100"
                  >
                    {item.namber}
                  </button>
                </div>
              </div>
              <div class="flex-none w-14 h-14 ...">
                <img
                  src={item.logo2}
                  className="flex-none w-12 h-12 rounded-full"
                />
              </div>
            </div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
