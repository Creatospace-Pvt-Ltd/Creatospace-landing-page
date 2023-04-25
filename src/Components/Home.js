import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { AppCon } from "../Styles/App.Styles";
import Footer from "./Footer";
import TodoSection from "./TodoSection";

const Home = () => {
  return (
    <>
      <AppCon>
        <Header />

        {/* <TodoSection /> */}
      </AppCon>
    </>
  );
};

export default Home;
