import React from "react";
import "./DoctorQuestion.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DoctorImage from"./Images/doctorquestion.webp";

export const DoctorQuestion = () => {
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [textAreaText, setTextArea] = useState("");

  const form = useRef();

  const NotifyYesDoctor = "custom-id-yes-Doctor";
  const NotifyNoDoctor = "custom-id-no-Doctor";

  const notifySucsesfullyDoctor = () => {
      toast.success("Успешно отправлено", {
        toastId: NotifyYesDoctor,  
        position: toast.POSITION.TOP_RIGHT,
        });
  
  }

  const notifyFailedDoctor = () => {
      toast.error("Что-то пошло не так...", {
        toastId: NotifyNoDoctor,   
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
            notifySucsesfullyDoctor();
            setTextArea("");
            setEmailText("");
            setNameText("");
        },
        (error) => {
            notifyFailedDoctor();
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
          <div className="Doctor-Description">Если у Вас есть интересующий вопрос, но Вы не нашли ответа на нашем сайте, Вы всегда можете задать вопрос нашему специалисту и получить нужную Вам информацию о препарате</div>
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
