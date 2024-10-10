import React, { useState } from "react";
import Login from "./Login/page";

const MainPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [customers, setCustomers] = useState([]);
  const [emailExists, setEmailExists] = useState<boolean>(false);

  // Replace this with your custom token
  const customToken = "your_custom_token_here"; 

  const handleEmailSubmit = async (enteredEmail: string) => {
    setEmail(enteredEmail);
    await fetchCustomers(customToken, enteredEmail);
  };

  const fetchCustomers = async (token: string, enteredEmail: string) => {
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

      if (response.ok) {
        const result = await response.json();
        setCustomers(result);

        // Check if the entered email exists in the customer list
        const emailFound = result.some((customer: any) => customer.emailAdd === enteredEmail);

        if (emailFound) {
          setEmailExists(true);
          console.log("Email exists in the customer list");
        } else {
          setEmailExists(false);
          console.log("Email not found in the customer list");
        }

      } else {
        console.error("Failed to fetch customer data");
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  return (
    <div className="bg-[#F4F4F4] w-full mx-auto pt-28 items-center justify-center">
      <Login onEmailSubmit={handleEmailSubmit} />
      {email && (
        <div>
          {emailExists ? (
            <p className="text-green-600">Email is registered in the customer list.</p>
          ) : (
            <p className="text-red-600">Email is not found in the customer list.</p>
          )}
          <h3>Customers List:</h3>
          <ul>
            {customers.map((customer: any) => (
              <li key={customer.id}>
                {customer.customer_name} ({customer.emailAdd})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainPage;
