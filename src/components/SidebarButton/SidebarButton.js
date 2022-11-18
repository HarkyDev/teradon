import React from "react";
import "./index.css";

function SidebarButton({ text, Icon }) {
  return (
    <div className="sideBarButton">
        <Icon className="sideBarIcon"/>
      <h2 className="buttonText">{text}</h2>
    </div>
  );
}

export default SidebarButton;
