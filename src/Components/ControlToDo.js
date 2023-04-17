import React, { useRef } from "react";
import { Auditorium } from "./Auditorium";
import { useFrame } from "@react-three/fiber";
import { Character1 } from "./Character1Talking";
import { Character2 } from "./Character2Talking";
import { Character3 } from "./Character3Talking";

const ControlToDo = ({ stage }) => {
  return (
    <>
      <Auditorium stage={stage} />
      <Character1 />
      <Character2 />
      <Character3 />
    </>
  );
};

export default ControlToDo;
