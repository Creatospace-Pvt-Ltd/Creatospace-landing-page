import React from "react";
import {
  PlatformCardsLayout,
  PlatformCardsParent,
  PlatformCardsParentImage,
  PlatformCardsParentText,
} from "../Styles/PlatformCardsStyles";
import social from "../Assets/social.png";
import community from "../Assets/community.png";
import creative from "../Assets/Creative.png";

const PlatformCards = (props) => {
  return (
    <>
      <PlatformCardsLayout>
        <PlatformCardsParent>
          <PlatformCardsParentImage>
            <img src={props.image} alt="" />
          </PlatformCardsParentImage>
          <PlatformCardsParentText>
            <span>{props.CardText}</span>
          </PlatformCardsParentText>
        </PlatformCardsParent>
      </PlatformCardsLayout>
    </>
  );
};

export default PlatformCards;
