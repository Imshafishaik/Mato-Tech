import React from "react";
import WhatsappIcon from "../assets/images/WhatsappIcon.png"
import { Link } from "react-router-dom";

const WhatsappButton = () => {
  return (
    <div className="Whatsapp-Button-Container">
      <Link to="https://wa.me/+919650062127" target="_blank">
        <img src={WhatsappIcon} alt="" />
      </Link>
    </div>
  );
};

export default WhatsappButton;
