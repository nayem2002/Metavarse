import { useMoralis, useMoralisQuery } from "react-moralis";
import UserAvater from "./UserAvater";
import Timeage from "timeago-react";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isMatch = user.get("ethAddress") === message.get("ethAddress");
  return (
    <>
      <div className={`flex space-x-2  ${isMatch && "justify-end"}`}>
        <div className={`${isMatch && "order-last ml-2"} z-10`}>
          <UserAvater
            isChat
            isMatch={isMatch}
            username={message.get("username")}
          />
        </div>
        <div>
          <p
            className={`p-2  md:max-w-xs sm:max-w-[280px] max-w-[200px] px-4 text-gray-50 relative rounded-full after:absolute after:top-7 after:w-8 after:h-1  ${
              isMatch
                ? "bg-pink-500 after:bg-pink-500 after:rotate-45 after:-right-[17px] after:origin-top "
                : "bg-blue-600 after:bg-blue-600 after:-left-[20px] after:rotate-[150deg] transform  "
            }`}
          >
            {message.get("message")}
          </p>
        </div>
        <Timeage
          className={`text-[12px] italic hidden xs:inline-block text-gray-400 ${
            isMatch && "order-first"
          }`}
          datetime={message.createdAt}
        />
      </div>
    </>
  );
};

export default Message;
