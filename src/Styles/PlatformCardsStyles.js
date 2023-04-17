import styled from "styled-components";
import { COLORS, FONTS, DEVICE } from "../Constants/theme";
import social from "../Assets/social.png";
import community from "../Assets/community.png";
import creative from "../Assets/Creative.png";

export const PlatformCardsLayout = styled.div`
  display: flex;
  height: 20rem;
  width: 17rem;
  border: 1px solid #252736;
  border-radius: 12px;
  background-color: #111424;
  perspective: 1000px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  position: absolute;
  @media ${DEVICE.mobileM} {
    width: 100%;
  }
`;
export const PlatformCardsLayoutBack = styled.div`
  display: flex;
  height: 20rem;
  width: 17rem;
  border: 1px solid #252736;
  border-radius: 12px;
  background-color: #111424;
  perspective: 1000px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(180deg);
  color: white;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 24px;
  @media ${DEVICE.mobileM} {
    width: 100%;
  }
`;

export const PlatformCardsParent = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 11px;
  background: #111424;
  /* background-image: linear-gradient(117deg,#5f7bff,#a63bd9);              // gradient */
`;

export const PlatformCardsParentImage = styled.div`
  /* background: url(${social}); */
  background-size: cover;
  width: 100%;
  /* height: 60%; */
  object-fit: contain;
  display: flex;
  justify-content: center;
  background-size: contain;

  img {
    overflow: hidden;
    width: 100%;
    height: 12rem;
  }
`;

export const PlatformCardsParentText = styled.div`
  color: #e5e6ec;
  font-size: 1.2rem;
  text-align: center;
  padding: 8px 10px;
  background-color: rgba(83, 131, 255, 0.1);
  border-radius: 7px;
  span {
    background-image: linear-gradient(225deg, #67ffd8, #40e8ff 50%, #9685ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
`;

// export const  = styled.div``
// export const  = styled.div``
