import Image from "next/image";
import { useMoralis } from "react-moralis";

const UserAvater = ({ onClickAvater, username, isChat, isMatch }) => {
  const { user, logout } = useMoralis();
  return (
    <>
      <div>
        <div
          onClick={onClickAvater && logout}
          className={`relative cursor-pointer shadow-sm mt-4 bg-black rounded-full  border-4 ${
            isMatch ? "border-pink-600" : "border-blue-600"
          }  ${isChat ? "animate-none w-10 h-10" : "animate-pulse w-32 h-32"}`}
        >
          <Image
            src={`https://avatars.dicebear.com/api/pixel-art/${
              username || user.get("username")
            }.svg`}
            layout="fill"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default UserAvater;
