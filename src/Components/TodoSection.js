import React, { useEffect, useState } from "react";
import {
  TodoSectionLayout,
  TodoSectionLayoutTitle,
  TodoSectionLayoutParent,
  TodoSectionLayoutParentLeft,
  TodoSectionLayoutParentRight,
  TodoSectionLayoutParentLeftImage,
  TodoSectionLayoutParentRightTitle,
  TodoSectionLayoutParentRightSubTitle,
  CardLayoutParent,
  VirtualCardSectionLayout,
  VirtualSectionTitle,
  VirtualSectionParent,
  VirtualCardLayoutParent,
  PlatformLayoutTitle,
  PlatformLayout,
  PlatformCardLayoutParent,
  TodoStageContainer,
  TodoStage,
  PlatformCardLayoutIn,
} from "../Styles/TodoSectionStyles";
import PlatformCards from "./PlatformCards";
import Confrence from "../Assets/confrence.jpg";
import Content from "../Assets/content.jpg";
import Followers from "../Assets/followers.png";
import community from "../Assets/community.png";
import Creative from "../Assets/Creative.png";
import social from "../Assets/social.png";
import audispace from "../Assets/audispace.jpg";
import videospace from "../Assets/videospace.jpg";
import Parkspace from "../Assets/parkspace.jpg";
import musicspace from "../Assets/musicspace.png";
import memespace from "../Assets/memespace.jpg";
import gamingspace from "../Assets/gamingspace.png";
import { HiPresentationChartLine } from "react-icons/hi";
import { MdPark } from "react-icons/md";
import { TbVideoPlus } from "react-icons/tb";
import { FaRegLaughSquint } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { OrbitControls } from "@react-three/drei";

import VirtualSpacesCards from "./VirtualSpacesCards";
import { Canvas, useFrame } from "@react-three/fiber";
import { Auditorium } from "./Auditorium";
import ControlToDo from "./ControlToDo";
import { PlatformCardsLayoutBack } from "../Styles/PlatformCardsStyles";
import Footer from "./Footer";
// import VirtualSpaces from './VirtualSpaces';
const TodoSection = () => {
  const VirtualSpaceCardsData = [
    {
      id: 1,
      image: audispace,
      icon: <HiPresentationChartLine />,
      title: "Auditorium Space ",
      subtitle:
        "Conduct Live webinars, courses & workshops in a 3D auditorium.",
    },
    {
      id: 2,
      image: Parkspace,
      icon: <MdPark />,
      title: "Park Meetup Space",
      subtitle:
        "Let your audience hangout together or conduct meetups with them.",
    },
    {
      id: 3,
      image: videospace,
      icon: <TbVideoPlus />,
      title: "Video streaming Space",
      subtitle:
        "Add recorded videos to the playlist and let your audience watch them together on the big screen.",
    },
    {
      id: 4,
      image: memespace,
      icon: <FaRegLaughSquint />,
      title: "Meme Space",
      subtitle:
        "Tingle your audience's humour bone by posting coolest memes relatable for your audience.",
    },
    {
      id: 5,
      image: gamingspace,
      icon: <IoLogoGameControllerB />,
      title: "Micro-gaming Spaces",
      subtitle:
        "Let your community members hangout playing with quizes, chess, tik-tak-toe, etc.",
    },
    {
      id: 6,
      image: musicspace,
      icon: <BsMusicNoteBeamed />,
      title: "Music cafe spaces",
      subtitle:
        "Let your playlists play in the cafe space to help your audience network and co-work together.",
    },
  ];
  const [activeStage, setActiveStage] = useState(1);
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);
  const todoStageNumbers = [0, 1, 2];

  // setInterval(() => {
  //   console.log(activeStage);
  //   if (activeStage < 3 || activeStage >= 1) setActiveStage(activeStage + 1);
  //   if (activeStage == 3) setActiveStage(1);
  // }, 2000);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((activeStage) => (activeStage % 3) + 1); // cycle through numbers 1 to 3
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <TodoSectionLayout>
        <TodoSectionLayoutTitle>
          <span>What can you do</span>
          <span style={{ color: "white !important" }}> on Creatospace?</span>
        </TodoSectionLayoutTitle>

        <TodoSectionLayoutParent WithTitle>
          <TodoSectionLayoutParentLeft>
            <Canvas
              style={{
                width: "90vw",
                height: "70%",
                position: "relative",
                borderRadius: "10px",
              }}
            >
              {" "}
              <ambientLight />
              <OrbitControls
                maxPolarAngle={Math.PI / 2 - 0.15}
                maxDistance={10}
              />
              <ControlToDo stage={activeStage} />
            </Canvas>
          </TodoSectionLayoutParentLeft>

          <TodoSectionLayoutParentRight>
            <TodoStageContainer>
              {todoStageNumbers.map((num, index) => (
                <TodoStage
                  onClick={() => {
                    setActiveStage(num + 1);
                  }}
                  active={activeStage}
                  index={index + 1}
                >
                  {num + 1}
                </TodoStage>
              ))}
            </TodoStageContainer>
            <TodoSectionLayoutParentRightTitle>
              {activeStage == 1 && "Live Webinars"}
              {activeStage == 2 && "Content on walls"}
              {activeStage == 3 && "Meet your followers"}
            </TodoSectionLayoutParentRightTitle>
            <TodoSectionLayoutParentRightSubTitle>
              {" "}
              {activeStage == 1 &&
                "Create Live Webinars and events and share it wit your friends and followers and have it in your virtual auditorium"}
              {activeStage == 2 &&
                "Share your content on different billboards and flex boards across your virtual spaces."}
              {activeStage == 3 &&
                " Meet your friends and followers irtually as well as discover people in other servers and enjoy audio based interactions."}
            </TodoSectionLayoutParentRightSubTitle>
          </TodoSectionLayoutParentRight>
        </TodoSectionLayoutParent>
      </TodoSectionLayout>

      {/* --------------------------------------CARDS SECTION START */}

      <PlatformLayout>
        <PlatformLayoutTitle>
          Who is <span>this platform for ?</span>
        </PlatformLayoutTitle>
        <PlatformCardLayoutParent>
          <PlatformCardLayoutIn>
            <PlatformCards CardText="Social Media Creators" image={social} />
            <PlatformCardsLayoutBack>
              A perfect solution for social media creators to increase their
              reach and interact with their audience. Gain insight about their
              content and how it's doing with the audience.
            </PlatformCardsLayoutBack>
          </PlatformCardLayoutIn>
          <PlatformCardLayoutIn>
            <PlatformCards CardText="Community Admins" image={community} />

            <PlatformCardsLayoutBack>
              Admins of various communities can hang out and discuss the ins and
              outs of their respective communities. Even cumbersome tasks feel
              enjoyable when it's immersive.
            </PlatformCardsLayoutBack>
          </PlatformCardLayoutIn>
          <PlatformCardLayoutIn>
            <PlatformCards CardText="Creative People" image={Creative} />
            <PlatformCardsLayoutBack>
              All-round facilities for all sorts of creative genius out there.
              Connect, interact, and communicate with audience and like-minded
              people
            </PlatformCardsLayoutBack>
          </PlatformCardLayoutIn>
        </PlatformCardLayoutParent>
      </PlatformLayout>

      {/* ------------------------------------- SPACES CARDS START-------------   */}

      <VirtualCardSectionLayout>
        <VirtualSectionTitle VirtualSpace>
          Ready-made<span> Customizable Virtual Spaces</span>
        </VirtualSectionTitle>
        <VirtualSectionParent WithTitle>
          <VirtualCardLayoutParent VirtualSpace>
            {VirtualSpaceCardsData.map((vscard) => (
              <VirtualSpacesCards
                image={vscard.image}
                icon={vscard.icon}
                title={vscard.title}
                subtitle={vscard.subtitle}
              />
            ))}
          </VirtualCardLayoutParent>
        </VirtualSectionParent>
        <Footer />
      </VirtualCardSectionLayout>
    </div>
  );
};

export default TodoSection;
