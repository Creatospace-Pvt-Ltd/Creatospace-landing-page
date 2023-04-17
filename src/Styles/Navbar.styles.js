import styled from "styled-components";
import { DEVICE } from "../Constants/theme";

export const TopNav = styled.div`
width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  background-color:transparent;
  align-items: center;
  padding-top:1rem;
padding-left: 4rem;
  /* padding: 10px 20px; */
  @media ${DEVICE.mobileL} {
    padding: 10px;
  }
`;
export const LogoCon = styled.div`
  width: 200px;
  @media ${DEVICE.mobileL} {
    width: 150px;
  }
`;
export const Logo = styled.img`
  width: 100%;
`;


// export const MenuItems = styled.div`
// display: flex;
// justify-content: space-between;
// width: 60%;
// `