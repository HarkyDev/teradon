import React from "react";
import "./index.css";

function SidebarButton({active,text,Icon }) {
  return (
    <div className={`sideBarButton ${active && "sidebarButton--active"}`}>
        <Icon className="sideBarIcon"/>
      <h2 className="buttonText">{text}</h2>
    </div>
  );
}

export default SidebarButton;

