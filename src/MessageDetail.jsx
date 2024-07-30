import { useParams } from "react-router-dom";

const MessageDetail = () => {
  const { id } = useParams();
  // Fetch the message detail based on the id from the route parameter
  // This example uses a static message for simplicity

  // Sample messages data
  const members = [
    // Your members data
  ];

  const message = members.find((member) => member.email === id);

  if (!message) return <p>Message not found</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
        <h1>rr</h1>
      <div className="flex gap-3">
        <img
          src={message.avatar}
          alt={`Avatar of ${message.name}`}
          className="flex-none w-24 h-24 rounded-full"
        />
        <div>
          <h4 className="text-gray-800 text-xl font-semibold">
            {message.name}
          </h4>
          <p className="text-gray-600">{message.email}</p>
        </div>
      </div>
      <p className="mt-4">Detailed message content goes here...</p>
    </div>
  );
};

export default MessageDetail;
