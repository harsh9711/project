"use client";
import Image from "next/image";
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
const Signup = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [customers, setCustomers] = useState([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = {
      username: email,
      password: Password,
    };
    const response = await fetch(
      "https://untitled-twkmuar27a-uc.a.run.app/api/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );

    if (response.ok) {
      const result = await response.json();
      setToken(result.token);
      await fetchCustomers(token);
      console.log("Token:", result.token);
    } else {
      console.error("Login failed");
    }
  };
  const fetchCustomers = async (token: string) => {
    try {
      const response = await fetch(
        "https://untitled-twkmuar27a-uc.a.run.app/api/customer-list/",
        {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const result = await response.json();
        setCustomers(result);
        console.log("Customers:", result);
      } else {
        console.error("Failed to fetch customer data");
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };
  return (
    <div className="flex   px-20 justify-center mx-auto rounded-[50px] gap-y-28 flex-col  bg-white max-w-[1538px] xl:h-[750px] h-full w-full items-start text-black">
      {/* <div className="w-full">
        <Image
          src="/Logo.svg"
          width={100}
          height={100}
          alt="companylogo"
        />
      </div> */}
      <div className="flex flex-col sm:flex-row gap-10 w-full mx-auto justify-between items-end">
        <div className="max-w-[278px] sm:max-w-[470px] sm:w-1/2">
          <h1 className="sm:text-[24px] text-[16px] font-medium">STEP 2</h1>
          <h2 className="sm:text-[48px] text-[24px] font-bold leading-tight">
            Create an account to continue
          </h2>
          <p className="sm:text-[24px] pt-2 sm:pt-4 text-[12px] font-medium">
            You'll be able to log in to Dingoo with this email address and
            password.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-end sm:w-1/2"
        >
          <div className=" max-w-[728px] w-full gap-y-2 flex flex-col">
            {" "}
            <p className="sm:text-[24px] text-[12px] font-medium">
              Enter a password to create your account with
            </p>
            <input
              className="border-[#939393] p-6 border w-full rounded-[5px]"
              placeholder="Choose a password"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-row w-full justify-between items-end ">
            {" "}
            <h2 className="sm:no-underline max-w-[350px] w-full underline sm:text-[16px] text-[10px]  text-[#4E4E4E] font-medium">
              Use a minimum of 6 characters (case sensitive) with at least one
              number or special character.
            </h2>{" "}
            <button
              type="submit"
              className="mt-4 max-w-[113.5px] sm:max-w-[227px] w-full p-2 font-bold sm:p-4 bg-[#000000] text-white rounded-[10px]"
            >
              Agree & Continue
            </button>
          </div>
        </form>
      </div>
      {token && <p className="mt-4">Token: {token}</p>}
    </div>
  );
};

export default Signup;
