import React from "react";
import "./DoctorQuestion.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DoctorImage from"./Images/doctorquestion.webp";

export const DoctorQuestion = () => {
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [textAreaText, setTextArea] = useState("");

  const form = useRef();

  const notifySucsesfully = () => {
    toast.success("Успешно отправлено", {
        position: toast.POSITION.TOP_RIGHT
      });
}

const notifyFailed = () => {
    toast.error("Что-то пошло не так...", {
        position: toast.POSITION.TOP_RIGHT
      });
}

  const nameSelect = (e) => {
    setNameText(e.target.value);
  };

  const emailSelect = (e) => {
    setEmailText(e.target.value);
  };

  const textAreaSelect = (e) => {
    setTextArea(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    emailjs
      .sendForm(
        "service_x6kt42c",
        "template_q9iaa2a",
        form.current,
        "FKDMCs7z1Y7TOoCpl"
      )
      .then(
        (result) => {
            notifySucsesfully();
            setTextArea("");
            setEmailText("");
            setNameText("");
        },
        (error) => {
            notifyFailed();
            setTextArea("");
            setEmailText("");
            setNameText("");
        }
      );
  };

  return (
    <div className="DoctorQuestion-Container" id="DoctorQuestion">
      <h2 className="Doctor-Question-Title"> Вопрос врачу</h2>
      <div className="Doctor-Question-Inner">
        <div className="Doctor-Question-Image-Container">
          <img className="Doctor-Img" alt="Doctor" src={DoctorImage}></img>
        </div>
        <div className="Doctor-Question-Content">
          <div className="Doctor-Description">Если у вас есть интресующий вас вопрос но вы не нашли ответа на нашем сайте, вы всегда можете задать вопрос нашему специалисту и получить нужную вам информацию о препарате</div>
          <form
            onSubmit={sendEmail}
            ref={form}
            id="Question-Form"
            className="Question-Form"
          >
            <input
              required
              type="text"
              placeholder="Ваше имя"
              className="Question-Input"
              name="name"
              value={nameText}
              onChange={nameSelect}
            ></input>
            <input
              required
              type="email"
              placeholder="Email-адрес"
              className="Question-Input"
              name="email"
              value={emailText}
              onChange={emailSelect}
            ></input>
            <textarea
              required
              placeholder="Напишите вопрос"
              name="message"
              className="Question-Message"
              value={textAreaText}
              onChange={textAreaSelect}
            ></textarea>
            <ToastContainer 
                theme="light"
                />
          </form>
          <button 
          className="Doctor-Question-Button"
          form="Question-Form"
          >Отправить</button>
        </div>
      </div>
    </div>
  );
};
