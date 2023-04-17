import React from 'react'
import { VirtualSpacesCardLayout, SpaceCardIcon, SpaceCardTitle, SpaceCardSubTitle } from "../Styles/VirtualSpacesStyles";
import audispace from "../Assets/audispace.jpg";
import videospace from "../Assets/videospace.jpg";
import parkspace from "../Assets/parkspace.jpg";
import musicspace from "../Assets/musicspace.png";
import memespace from "../Assets/memespace.jpg";
import gamingspace from "../Assets/gamingspace.png";
import { HiPresentationChartLine } from "react-icons/hi";
import { MdPark } from "react-icons/md";
import { TbVideoPlus } from "react-icons/tb";
import { FaRegLaughSquint } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io";
import { BsMusicNoteBeamed } from "react-icons/bs";

const VirtualSpacesCards = (vscard) => {

   
    // {VirtualSpacesCards.map(vscard =>
    return (
        <>
            <VirtualSpacesCardLayout>
                <img src={vscard.image} alt="" />
                <SpaceCardIcon>
                    {vscard.icon}
                    {/* {props.spacecardicon} */}
                </SpaceCardIcon>
                <SpaceCardTitle>
                    {vscard.title}
                    {/* {props.spacecardtitle} */}
                </SpaceCardTitle>
                <SpaceCardSubTitle>
                    {vscard.subtitle}
                    {/* {props.spacecardsubtitle} */}
                </SpaceCardSubTitle>
            </VirtualSpacesCardLayout>


        </>
    )
}

export default VirtualSpacesCards