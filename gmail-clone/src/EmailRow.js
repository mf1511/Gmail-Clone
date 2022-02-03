import React from "react";
import { useHistory } from "react-router-dom";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import { selectMail, selectOpenMail } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import("./EmailRow.css");

function EmailRow({ id, to, title, subject, message, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ id, to, title, subject, message, time }));
    history.push("/mail");
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{to}</h3>
      <div className="emailRow__message">
        <h4>
          {subject} <span className="emailRow__description">- {message}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
