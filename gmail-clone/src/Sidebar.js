import { Button, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
import("./Sidebar.css");

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="sidebar">
        <Button
          startIcon={<AddIcon fontSize="large" />}
          className="sidebar__compose"
          onClick={() => {
            dispatch(openSendMessage());
          }}
        >
          Compose
        </Button>
        <SidebarOptions
          className="sidebar__options"
          Icon={InboxIcon}
          title="Inbox"
          number={54}
          selected={true}
        />
        <SidebarOptions Icon={StarIcon} title="Starred" />
        <SidebarOptions Icon={QueryBuilderIcon} title="Snoozed" />
        <SidebarOptions Icon={LabelImportantIcon} title="Important" />
        <SidebarOptions Icon={SendIcon} title="Sent" />
        <SidebarOptions Icon={BrandingWatermarkIcon} title="Drafts" />
        <SidebarOptions Icon={ExpandMoreIcon} title="More" />
        <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <DuoIcon />
            </IconButton>
            <IconButton>
              <PhoneIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
