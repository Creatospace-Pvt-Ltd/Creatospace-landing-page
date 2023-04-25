import styled from "styled-components";
import { COLORS, FONTS, DEVICE } from "../Constants/theme";
import Confrence from "../Assets/confrence.jpg";
import Content from "../Assets/content.jpg";
import Followers from "../Assets/followers.png";

export const TodoSectionLayout = styled.div`
  /* min-height: 100vh; */
  height: max-content;
  margin: 0 auto;
  width: 90%;
  box-sizing: border-box;
  scroll-snap-align: start;
  @media ${DEVICE.tablet} {
    margin-top: 3rem;
  }
  @media ${DEVICE.mobileM} {
    margin-top: 0rem;
  }
`;

export const TodoSectionLayoutTitle = styled.div`
  font-size: 3rem;
  color: white;
  font-weight: 700;
  text-align: center;
  /* padding-top: 3rem; */
  padding-top: ${(props) => (props.VirtualSpace ? "1rem" : "3rem")};
  z-index: 2;
  span {
    position: relative;
    background-image: linear-gradient(90deg, #5383ff, #9d70ff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 700;
  }

  @media ${DEVICE.tablet} {
    font-size: 2.8rem;
    margin-top: 2rem;
  }
`;

export const TodoSectionLayoutParent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  /* height:90vh ; */
  height: ${(props) => (props.WithTitle ? "90vh" : "100vh")};
  /* padding: ${(props) => (props.VirtualSpace ? "2rem" : "0")}; */
  box-sizing: border-box;

  /* @media ${DEVICE.tablet} {
    flex-direction: ${(props) =>
    props.alingment ? "column" : "column-reverse"};
  } */
`;

export const TodoSectionLayoutParentLeft = styled.div`
  width: 100vw;

  overflow: hidden;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  margin: auto;

  z-index: 1;
  /* padding-left: ${(props) => (props.rightimage ? "8rem" : "0")}; */

  @media ${DEVICE.laptop} {
    /* padding-left: ${(props) => (props.rightimage ? "0" : "3rem")}; */
  }

  @media ${DEVICE.tablet} {
    padding-left: 0;
  }

  ::after {
    content: "";
    position: absolute;
    background-image: radial-gradient(
      circle closest-side at 48% 50%,
      #00d2ef,
      rgba(56, 237, 248, 0)
    );
    width: 100%;
    height: 42rem;
    /* width: 47rem; */
    top: -1px;
    right: -49px;
    opacity: 0.5;
    z-index: -1;

    @media ${DEVICE.tablet} {
      width: 100%;
      height: 24rem;
      right: 1px;
      top: -40px;
    }
  }
  /* @media ${DEVICE.tablet} {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
  } */
  /* background-image: radial-gradient(circle closest-side at 48% 50%,#00d2ef,rgba(56,237,248,0)); */
  /* background: radial-gradient(63.09% 73.02% at 52.31% 50.38%, rgb(253 103 159 / 40%) 0%, rgb(18 19 29 / 0%) 70%); */
  /* background-position: center; */
`;

export const TodoSectionLayoutParentLeftImage = styled.div`
  background-size: cover;
  width: ${(props) => (props.rightimage ? "85%" : "75%")};
  position: relative;
  height: 65%;

  @media ${DEVICE.lapetop} {
    width: ${(props) => (props.rightimage ? "85%" : "95%")};
  }

  @media ${DEVICE.tablet} {
    width: 85%;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
  }

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: -20px;
    right: ${(props) => (props.rightimage ? "-28px" : "28px")};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.9px);
    z-index: -1;
    border: 1px solid #252736;
    border-radius: 12px;
    background-color: #111424;

    @media ${DEVICE.tablet} {
      right: 20px;
    }
  }
`;

export const TodoSectionLayoutParentRight = styled.div`
  width: 50%;
  min-width: 300px;
  display: flex;
  height: max-content;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  padding-left: 30px;

  flex-direction: column;
  gap: 2rem;
  position: relative;
  left: 47%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  min-height: 50%;

  @media (max-width: 700px) {
    left: 50%;
    transform: translate(-50%);

    height: 30%;
    width: 80%;
  }

  /* @media ${DEVICE.tablet} {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  } */
`;

export const TodoSectionLayoutParentRightTitle = styled.div`
  color: ${COLORS.YellowTitle};
  font-size: 3rem;
  border-left: 6px solid white;
  padding-left: 0.7rem;
  font-weight: 700;

  @media ${DEVICE.tablet} {
    padding-left: 0;
    border-left: none;
    font-size: 2.5rem;
  }
`;
export const TodoSectionLayoutParentRightSubTitle = styled.div`
  color: #a7a7af;
  font-size: 1.7rem;

  @media ${DEVICE.tablet} {
    font-size: 1.3rem;
  }
`;

export const TodoStageContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
`;
export const TodoStage = styled.div`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active == props.index ? "#6380ff" : "black"};
  cursor: pointer;
  transition: all 0.3s;
`;

// -------------------------------------------------- THIS PLATFORM FOR CARDS ---------------------

export const CardLayoutParent = styled(TodoSectionLayoutParent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: ${(props) => (props.VirtualSpace ? "95%" : "80%")};
  gap: ${(props) => (props.VirtualSpace ? "1rem" : "3rem")};

  /* gap:3rem; */
  height: ${(props) => (props.VirtualSpace ? "80vh" : "90vh")};
  /* height: 90vh; */
  margin: 0 auto;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    background-image: radial-gradient(
      circle closest-side at 48% 50%,
      #00d2ef,
      rgba(56, 237, 248, 0)
    );
    /* width: 100%; */
    height: 42rem;
    width: 65rem;
    top: -200px;
    right: -100px;
    opacity: 0.3;
    z-index: ${(props) => (props.VirtualSpace ? "-1" : "0")};
  }
`;

export const VirtualCardSectionLayout = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media ${DEVICE.lapetop} {
    height: 100%;
    gap: 5rem;
    margin-top: 2rem;
  }

  @media ${DEVICE.tablet} {
    height: 100%;
  }
`;

export const VirtualSectionTitle = styled.div`
  font-size: 3rem;
  color: white;
  font-weight: 700;
  text-align: center;
  /* padding-top: 3rem; */
  padding-top: 1rem;
  height: 6rem;

  @media ${DEVICE.tablet} {
    font-size: 2.5rem;
    height: 7rem;
    margin-bottom: 1.7rem;
  }

  span {
    background-image: linear-gradient(90deg, #5383ff, #9d70ff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 700;
  }
`;

export const VirtualSectionParent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: auto;
  /* padding: ${(props) => (props.VirtualSpace ? "2rem" : "0")}; */
  box-sizing: border-box;
`;

export const VirtualCardLayoutParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  gap: 1rem;
  height: auto;
  /* height: 90vh; */
  margin: 0 auto;
  position: relative;
  padding: 1.5rem;

  @media ${DEVICE.tablet} {
    gap: 2rem;
  }
  ::after {
    content: "";
    position: absolute;
    background-image: radial-gradient(
      circle closest-side at 48% 50%,
      #00d2ef,
      rgba(56, 237, 248, 0)
    );
    /* width: 100%; */
    height: 42rem;
    width: 65rem;
    top: -200px;
    right: -440px;
    opacity: 0.3;
    z-index: ${(props) => (props.VirtualSpace ? "-1" : "0")};
  }
`;

export const PlatformLayout = styled(VirtualCardSectionLayout)`
  height: 42rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  scroll-snap-align: start;
  height: max-content;

  @media ${DEVICE.laptop} {
    gap: 1rem;
    /* height: 100%; */
  }

  @media ${DEVICE.tablet} {
    /* height: 100%; */
    gap: 1rem;
  }
`;

export const PlatformLayoutTitle = styled(VirtualSectionTitle)`
  padding-top: 0;
  gap: 1rem;
`;

export const PlatformCardLayoutParent = styled(VirtualCardLayoutParent)`
  padding-top: 0;
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  /* display: flex; */
  @media ${DEVICE.laptop} {
    height: 100%;
    gap: 2rem;
  }

  @media ${DEVICE.tablet} {
    gap: 1rem;
  }

  @media ${DEVICE.mobileM} {
    width: 100%;
    padding: 5px;
  }
`;
export const PlatformCardLayoutIn = styled.div`
  position: relative;
  height: 20rem;
  width: 17rem;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`;
