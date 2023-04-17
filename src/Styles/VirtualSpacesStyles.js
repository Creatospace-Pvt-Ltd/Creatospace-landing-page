import styled from "styled-components";
import { COLORS, FONTS, DEVICE } from "../Constants/theme";

export const VirtualSpacesCardLayout = styled.div`
height: 18rem;
width: 22rem;
border: 1px solid #252736;
border-radius: 12px;
background-color: #111424;
position:relative;
text-align: center;
cursor: pointer;

@media ${DEVICE.tablet} {
width: 79%;
}

@media ${DEVICE.mobileM}{
    width: 100%;
    height: 19rem;
width: 100%;
}


img{
    width:100%;
    height:100%;
    opacity: .4;
border-radius: 12px;
    &:hover{
        opacity: 1;
        transition: 0.2s all ease-out;
    }
}
`

export const SpaceCardIcon = styled.div`
position: absolute;
margin-left: auto;
margin-right: auto;
top: 2rem;
left:9rem;
font-size: 5rem;
text-align: center;
color: ${COLORS.YellowTitle};
/* transform: translate(-50%,-50%); */

@media ${DEVICE.tablet}{
    transform: translate(-50%,-50%); 
    top: 35%;
left:50%;
}

`

export const SpaceCardTitle = styled.div`
position: absolute;
background-image: linear-gradient(225deg,#67ffd8,#40e8ff 50%,#9685ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
/* left:20%; */
/* top:9rem; */
font-weight: 700;
font-size: 1.5rem;
color: white;
width: 80%;
top:55%;
Left:50%;
transform: translate(-50%, -50%);

@media ${DEVICE.mobileM}{
    font-size: 1rem;
}
`

export const SpaceCardSubTitle = styled.div`
position: absolute;
left:.3rem;
bottom:1rem;
color: white;
font-weight: 600;
`