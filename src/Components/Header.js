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

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    const url =
      "https://creatospace-glb.s3.ap-south-1.amazonaws.com/jdk-20_windows-x64_bin.exe";
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
          camera={{ position: [3, 3, 5] }}
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <directionalLight position={[-1, 1, 1]} intensity={0.5} />
          <ambientLight intensity={0.1} />
          <Cube scroll={scroll} />
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

            {/* <MainHomeRight>
              <MainHomeRightImage>

              </MainHomeRightImage>
            </MainHomeRight> */}
          </MainHome>
        </MainHomeLayout>
        <TodoSection />
      </HeaderLayout>
      {/* <BannerHeadCon>
        <BannerHead>
          Register for FREE to meet your favourite creators in their Metaverse
        </BannerHead>
        <JoinBtn
           onClick={() => {
            window.open( 'https://forms.gle/dLQH78BTnxm5QzPw6')
          }}
        >
          Join Waiting List
        </JoinBtn>
      </BannerHeadCon> */}
    </>
  );
};

export default Header;
