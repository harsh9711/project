import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center mx-auto rounded-[50px] bg-white max-w-[1538px] w-full items-start text-black">
      <div className=" w-full">
        <Image
          src="/companylogo.svg"
          width={100}
          height={100}
          alt="companylogo"
        />
      </div>{" "}
      <div className="flex flex-row w-full mx-auto justify-between  items-center">
        {" "}
        <div className="max-w-[470px] w-full">
          {" "}
          <h1 className="sm:text-[24px] text-[16px] font-medium">STEP1</h1>
          <h2 className="sm:text-[48px] text-[36px] font-extrabold leading-tight ">
            Enter your email address to continue
          </h2>
          <p className="sm:text-[24px] text-[16px] font-medium">
        Log in to your account. If you don't have one, you will be prompted to
        create one.
      </p>
        </div>
        <div>
          <input
            className="border-[#939393] p-6 border w-[723px] "
            placeholder="email"
            type="text"
          />
        </div>
      </div>
   
    </div>
  );
};

export default Login;
