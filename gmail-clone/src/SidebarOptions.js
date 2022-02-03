import React from "react";
import("./SidebarOptions.css");

function SidebarOptions({ Icon, title, number, selected }) {
  return (
    <div
      className={`sidebar__options ${selected && "sidebar__options--active"}`}
    >
      {<Icon className="headerOpton_icon" />}
      <h3>{title}</h3>
      <p className="sidebar__optionsNumber">{number}</p>
    </div>
  );
}

export default SidebarOptions;
