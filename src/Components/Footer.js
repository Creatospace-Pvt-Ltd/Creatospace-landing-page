import React from "react";
// import { Link } from 'react-router-dom';
import { FooterContent } from "../Styles/Footer.styles";
import { FooterPrivacyPolicylink } from "../Styles/Footer.styles";
import { FooterTermslink } from "../Styles/Footer.styles";
import { FooterRefundlink } from "../Styles/Footer.styles";
import { FooterSupportlink } from "../Styles/Footer.styles";

const Footer = () => {
  return (
    <div style={{ scrollSnapAlign: "start", maxHeight: "100px" }}>
      <FooterContent>
        <FooterPrivacyPolicylink to="./privacy-policy">
          Privacy Policy
        </FooterPrivacyPolicylink>
        <FooterTermslink to="./terms-and-conditions">
          Terms and Conditions
        </FooterTermslink>
        <FooterRefundlink to="./refund-cancellation-policy">
          Refund & Cancellation Policy
        </FooterRefundlink>
        <FooterSupportlink to="./support">Support</FooterSupportlink>
      </FooterContent>
    </div>
  );
};

export default Footer;
