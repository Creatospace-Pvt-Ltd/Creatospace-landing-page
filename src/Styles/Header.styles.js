import styled from "styled-components";
import { COLORS, FONTS, DEVICE } from "../Constants/theme";
import Home from "../Assets/home.png";
import coverimg from "../Assets/pattern.png";
export const HeaderLayout = styled.div`
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
  scroll-snap-type: y;
  overflow-y: scroll;
  height: 100vh;
  position: fixed;
  overflow-x: hidden;
`;

export const MainHomeLayout = styled.div`
  width: 100%;
  height: max-content;
  background-size: cover;
  /* background-image: linear-gradient(
      to bottom,
      transparent,
      ${COLORS.background}
    ), */
  /* url(${coverimg}); */
  /* background: url(${coverimg}); */
  scroll-snap-align: start;
`;

export const MainHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  /* height: 100vh; */
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  /* background: url(${coverimg}); */
  background-size: cover;
  z-index: 2;
  @media ${DEVICE.tablet} {
    flex-direction: column;
  }
`;
export const MainHomeLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${DEVICE.laptopL} {
    gap: 3rem;
  }

  @media ${DEVICE.tablet} {
    width: 100%;
    text-align: center;
  }
`;
export const MainHomeLeftTitle = styled.div`
  font-size: 55px;
  font-weight: 700;
  color: white;
  z-index: 3;

  @media ${DEVICE.laptopL} {
    font-size: 44px;
  }

  @media ${DEVICE.laptop} {
    font-size: 37px;
  }
  @media ${DEVICE.tablet} {
    font-size: 36px;
  }
  span {
    /* color: #FEAD10; */
    color: #fdb600;
  }
`;
export const MainHomeLeftSubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.GreySubtitle};
  z-index: 3;

  @media ${DEVICE.laptopL} {
    font-size: 14px;
  }
`;

export const MainHomeLeftButton = styled.button`
  padding: 10px 20px;
  z-index: 3;

  background-image: linear-gradient(90deg, #5383ff, #9d70ff);
  /* background:rgb(77, 84, 253) ; */
  /* color: ${COLORS.background}; */
  color: white;
  font-weight: 700;
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;
`;
export const MainHomeRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  height: 48rem;
  width: 48rem;
  background: radial-gradient(
    62.42% 62.36% at 49.89% 51.36%,
    rgba(69, 62, 151, 0.8901960784313725) 0%,
    rgb(18 19 29/0%) 70%
  );

  @media ${DEVICE.laptopL} {
    height: 37rem;
    width: 37rem;
  }
  @media ${DEVICE.laptop} {
    height: 32rem;
    width: 32rem;
  }
`;

export const MainHomeRightImage = styled.div`
  background: url(${Home});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const BannerHeadCon = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  @media ${DEVICE.mobileL} {
    top: 30%;
  }
`;
export const BannerHead = styled.h1`
  color: ${COLORS.TextColor};
  text-align: center;
  font-size: 3rem;
  font-family: ${FONTS.Carzy};
  @media ${DEVICE.tablet} {
    font-size: 2rem;
  }
  @media ${DEVICE.mobileL} {
    font-size: 1.5rem;
  }
`;
export const JoinBtn = styled.button`
  position: absolute;
  font-size: 20px;
  top: 90%;
  left: 50%;
  transform: translate(-50%, 90%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
  background-color: initial;
  background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
  border: 5px solid rgb(255 95 5);
  border-radius: 25px;
  height: 50px;
  width: 300px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-family: ${FONTS.Monster};
  @media ${DEVICE.mobileL} {
    top: 100%;
  }
  &:hover {
    background-color: initial;
    background-image: linear-gradient(rgb(255 95 5) 0, rgb(255 95 5) 100%);
    border: none;
  }
`;
