import { useRef, useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";

const MESS_DURAION = 15;

const Body = () => {
  const [sentMessage, setSentMessage] = useState("");
  const { user, Moralis } = useMoralis();
  const messageEnd = useRef(null);

  const messageSent = (e) => {
    e.preventDefault();
    if (!sentMessage) return;
    const Messages = Moralis.Object.extend("Messages");
    const message = new Messages();

    message
      .save({
        message: sentMessage,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (res) => {
          // alert("Message sent successfull");
        },
        (err) => console.log(err)
      );

    messageEnd.current.scrollIntoView({ behavior: "smooth" });
    setSentMessage("");
  };

  const { data, error, isLoading } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MESS_DURAION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <>
      <section className="w-full pb-52 mt-2 relative">
        <div className="space-y-4">
          {data.map((current) => (
            <Message key={current.id} message={current} />
          ))}
        </div>
        <p ref={messageEnd} className="text-gray-100 mt-4 text-center">
          You&apos;re up to date {user.getUsername()}!
        </p>
        <div className="fixed right-0 grid place-items-center left-0 bottom-11">
          <div className="bg-black w-full xs:w-[400px] flex items-center px-4 justify-between h-12 rounded-full border border-blue-800 shadow-md">
            <input
              className="full outline-none h-full placeholder:text-gray-500 bg-transparent text-white"
              value={sentMessage}
              onChange={(e) => setSentMessage(e.target.value)}
              type="text"
              placeholder="Inter your message"
            />
            <button
              className="text-pink-700 hover:text-pink-900"
              onClick={messageSent}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
