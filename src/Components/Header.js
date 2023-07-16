import React from "react";
import {
  HeaderLayout,
  MainHomeLayout,
  MainHome,
  MainHomeLeft,
  MainHomeRight,
  MainHomeLeftTitle,
  MainHomeLeftSubTitle,
  MainHomeLeftButton,
  MainHomeRightImage,
  BannerHeadCon,
  BannerHead,
  JoinBtn,
} from "../Styles/Header.styles";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TodoSection from "./TodoSection";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useEffect } from "react";
import Cube from "./Cube";
import { useState } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { Earth } from "./Earth_low_poly";
import { Model } from "./Kate";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    const url =
      "https://link.creatospace.com/windownload";
    const link = document.createElement("a");
    link.download = "Creatospace.exe";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <HeaderLayout
        onScrollCapture={() => {
          if (!scroll) {
            setScroll(true);
          }
        }}
      >
        <Canvas
          // orthographic
          camera={{ position: [0, 0, 8.5] }}
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none",
            // backgroundColor: "black",
          }}
        >
          <directionalLight position={[-1, 1, 1]} intensity={0.5} />
          <ambientLight intensity={0.1} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={1}
            fade
            speed={1}
          />
          {/* <Cube scroll={scroll} /> */}
          {/* <Earth /> */}
          {/* <LittleEarth /> */}

          <OrbitControls />
          <Earth scroll={scroll} />
          <Model />
        </Canvas>
        <MainHomeLayout>
          <Navbar />
          <MainHome>
            <MainHomeLeft>
              <MainHomeLeftTitle>
                {" "}
                Create the most <span>immersive community experience</span> for
                your audience with the power of Metaverse
              </MainHomeLeftTitle>
              <MainHomeLeftSubTitle>
                Give your audience webinars & workshops, conduct meetups as well
                as stream your content in virtual spaces and make a wholesome
                and personalized experience for your members
              </MainHomeLeftSubTitle>
              <MainHomeLeftButton
                onClick={() => {
                  handleClick();
                }}
              >
                Download The Application Now (For Windows)
              </MainHomeLeftButton>
            </MainHomeLeft>
          </MainHome>
        </MainHomeLayout>
        <TodoSection />
      </HeaderLayout>
    </>
  );
};

export default Header;
