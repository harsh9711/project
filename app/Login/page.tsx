"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// [
//   {
//       "id": 1,
//       "customer_name": "John Doe",
//       "emailAdd": "a@a.com",
//       "password": "password"
//   },
//   {
//       "id": 2,
//       "customer_name": "Jane Doe",
//       "emailAdd": "a@a.com",
//       "password": "password"
//   },
//   {
//       "id": 3,
//       "customer_name": "Jennifer Bond",
//       "emailAdd": "a@a.com",
//       "password": "password"
//   },
//   {
//       "id": 4,
//       "customer_name": "James Bond",
//       "emailAdd": "a@a.com",
//       "password": "password"
//   }
// ]
interface LoginProps {
  onEmailSubmit: (email: string) => void;
}
const Login: React.FC<LoginProps> = ({ onEmailSubmit }) => {
  const [emailEnter, setEmailEnter] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEmailSubmit(emailEnter);
  };

  return (
    <div className="flex px-20 justify-center mx-auto rounded-[50px] gap-y-28 flex-col bg-white max-w-[1538px] xl:h-[750px] h-full w-full items-start text-black">
      <div className="flex flex-col sm:flex-row gap-10 w-full mx-auto justify-between items-center">
        <div className="max-w-[278px] sm:max-w-[470px] sm:w-1/2">
          <h1 className="sm:text-[24px] text-[16px] font-medium">STEP 1</h1>
          <h2 className="sm:text-[48px] text-[24px] font-bold leading-tight">
            Enter your email address to continue
          </h2>
          <p className="sm:text-[24px] text-[12px] font-medium">
            Log in to your account. If you don't have one, you will be prompted
            to create one.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-end sm:w-1/2"
        >
          <div className=" max-w-[728px] w-full">
            <input
              className="border-[#939393] p-6 border w-full rounded-[5px]"
              placeholder="Email"
              type="text"
              value={emailEnter}
              onChange={(e) => setEmailEnter(e.target.value)}
            />
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <h2 className="underline sm:text-[16px] text-[10px] font-medium">
              Have an account
            </h2>
            {/* <Link href="/Signup"> */}
              <button
                type="submit"
                className="mt-4 max-w-[113.5px] sm:max-w-[227px] font-bold w-full p-2 sm:p-4 bg-[#000000] text-white rounded-[10px]"
              >
                Continue
              </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
