import Image from "next/image";
import { useMoralis, ByMoralis } from "react-moralis";
import UserAvater from "./UserAvater";

const Navbar = () => {
  const { user, logout, setUserData, isUserUpdating } = useMoralis();
  const changeName = () => {
    const newName = prompt(
      `Provide your new username (current: ${user.getUsername()})`
    );

    if (!newName) return;
    setUserData({
      username: newName,
    });
  };
  return (
    <>
      <nav className="grid grid-cols-3 sticky top-0 z-50 shadow-md bg-black max-w-5xl mx-auto px-8 pt-3">
        <div className="relative hidden md:inline-block shadow-sm w-14 h-14 bg-black rounded-full ">
          <Image
            src="https://www.pngkit.com/png/detail/26-268992_metamask-metamask-wallet.png"
            layout="fill"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="grid col-span-3 xs:col-span-1 place-items-center">
          <h2 className=" text-pink-600">Welcome To our</h2>
          <h2 className="text-3xl font-semibold text-pink-600">Metaverse</h2>
          <UserAvater onClickAvater />
          <p className={`text-lg text-pink-600 text-center`}>
            {user.getUsername()}
          </p>
          <p
            onClick={changeName}
            disabled={isUserUpdating}
            className="text-center mb-4 cursor-pointer text-sm text-blue-600"
          >
            Change name
          </p>
        </div>
        <div className="relative hidden xs:inline-block xs:col-span-2 md:!col-span-1">
          <ByMoralis style={{ width: 200, position: "absolute", right: 0 }} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
