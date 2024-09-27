import React from "react";
import styled from "styled-components";
import Tulpa from "../img/logo.png"; // Import the logo from the Menu

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #202020; /* Dark background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Img = styled.img`
  height: 25px;
  opacity: 0.3;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Searchbox = styled.div`
  position: relative; /* Allows positioning of the icon */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 50%; /* Full width */
  max-width: 800px; /* Max width for larger screens */
  padding: 10px 12px 10px 40px; /* Padding for the icon */
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 25px; /* Rounder edges */
  outline: none;
  transition: border-color 0.3s ease;
  font-size: 14px;
  color: white;
  background-color: #333; /* Darker background */

  &:focus {
    border-color: #ff0000; /* Highlight color on focus */
  }

  &::placeholder {
    color: #aaa; /* Lighter placeholder text */
  }
`;

const Text = styled.p`
  color: #fff05f; /* Lavender */
  font-size: 16px;
`;

const LogoutButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff1a1a;
  }
`;

function Navbar() {
  return (
    <Container>
      <Logo>
        <Img src={Tulpa} alt="Logo" />
        <Text>MsfT</Text>
      </Logo>
      <Searchbox>
        <Input type="text" placeholder="Search..." />
      </Searchbox>
      <LogoutButton>Logout</LogoutButton>
    </Container>
  );
}

export default Navbar;
