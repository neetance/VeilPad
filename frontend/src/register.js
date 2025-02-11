import React, { useState } from "react";
import "../src/register.css";
import Web3 from "web3";
import {ethers} from "ethers";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    token: "",
    walletAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form Data Submitted:", formData);

    try {
      // Check if MetaMask (or another Ethereum provider) is installed
      if (!window.ethereum) {
        alert("Please install MetaMask to use this feature!");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log("Web3 initialized successfully");

      // Request account access if needed
      provider.send("eth_requestAccounts");
      const address = await provider.getSigner().getAddress();
      console.log("Accounts accessed successfully");

      // Get the first account
      
      console.log("Connected account:", account);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="token">Token:</label>
          <input
            type="text"
            id="token"
            name="token"
            value={formData.token}
            onChange={handleInputChange}
            placeholder="Enter your token"
            required
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="walletAddress">Wallet Address:</label>
          <input
            type="text"
            id="walletAddress"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleInputChange}
            placeholder="Enter your wallet address"
            required
          />
        </div> */}

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;