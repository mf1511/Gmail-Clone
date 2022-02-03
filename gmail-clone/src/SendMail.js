import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import firebase from "firebase/compat/app";
import { db } from "./firebase";
import("./SendMail.css");

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New message</h3>
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(closeSendMessage());
          }}
        />
      </div>
      <form className="sendMail__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          onChange={(e) => {
            setError("to", {
              type: "manual",
              message: "To is required",
            });
          }}
          name="to"
          className="formTo"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required</p>}

        <input
          onChange={(e) => {
            setError("subject", {
              type: "manual",
              message: "Subject is required",
            });
          }}
          name="subject"
          className="formSubject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required</p>
        )}

        <input
          onChange={(e) => {
            setError("message", {
              type: "manual",
              message: "To is required",
            });
          }}
          name="message"
          className="formMessage"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required</p>
        )}

        <div className="sendMail__options">
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
