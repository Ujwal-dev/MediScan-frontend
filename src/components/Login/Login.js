import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Login.css"
import LoginBox from "./LoginBox";

export default function Login() {
  return (
    <div>
      <Header />
      <LoginBox />
    </div>
  );
}
