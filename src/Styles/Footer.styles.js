import styled from "styled-components";
import { COLORS } from "../Constants/theme";
import { Link } from "react-router-dom";

export const FooterContent = styled.div`
/* height:10vh; */
height:3rem;
width:100%;
position: absolute;
text-decoration: none !important;
font-size: 1rem;
font-weight: 400;
background-image: linear-gradient(90deg,#5383ff,#9d70ff);
/* background-color:${COLORS.background}; */
display: flex;
justify-content: space-evenly;
flex-direction: row;
align-items: center;
`;

export const FooterPrivacyPolicylink = styled(Link)`
color: white !important;
 text-decoration: none;
 margin: 10px;
&:hover{
    color: ${COLORS.Creator} !important;
}`;




export const FooterTermslink = styled(Link)`
color: white !important;
 text-decoration: none;
 margin: 10px;
&:hover{
    color: ${COLORS.Creator} !important;
}`;

export const FooterRefundlink = styled(Link)`
color: white !important;
 text-decoration: none;
 margin: 10px;
&:hover{
    color: ${COLORS.Creator} !important;
}`;

export const FooterSupportlink = styled(Link)`
color: white !important;
 text-decoration: none;
 margin: 10px;
&:hover{
    color: ${COLORS.Creator} !important;
}`;