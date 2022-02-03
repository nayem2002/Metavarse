import Image from "next/image";
import { BsArrowBarRight } from "react-icons/bs";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <>
      <div className="relative">
        <div className="w-full relative h-screen">
          <Image
            src="https://links.papareact.com/55n"
            objectFit="cover"
            layout="fill"
            alt=""
          />
        </div>
        <div className="absolute grid place-items-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
          <div className="mb-10 text-gray-50 font-semibold">
            <p className="text-sm text-">Wellcome</p>
            <h2 className="text-4xl">Metaverse</h2>
          </div>
          <div className="relative animate-bounce shadow-sm w-36 h-36 bg-black rounded-full ">
            <Image
              src="https://www.pngkit.com/png/detail/26-268992_metamask-metamask-wallet.png"
              layout="fill"
              alt=""
              className="rounded-full"
            />
          </div>
          <button
            onClick={authenticate}
            className="flex font-semibold animate-pulse shadow-md bg-yellow-500 cursor-pointer active:scale-110 transform transition-all ease-linear duration-200 hover:bg-yellow-600 hover:shadow-lg px-4 py-2 mt-4 rounded-full  items-center space-x-2"
          >
            <BsArrowBarRight className="text-lg" />{" "}
            <span>Connect with wallet</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
