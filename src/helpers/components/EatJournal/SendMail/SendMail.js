import "./SendMail.scss"
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const SendMail = () => {
    const [emailText, setEmailText] = useState("");
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

    const emailSelect = (e) => {
        setEmailText(e.target.value);
      };

      const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        emailjs
          .sendForm(
            "service_x6kt42c",
            "template_yo052ok",
            form.current,
            "FKDMCs7z1Y7TOoCpl"
          )
          .then(
            (result) => {
                notifySucsesfully();
            },
            (error) => {
                notifyFailed();
            }
          );
      };

    return(
        <div className="Send-Mail">
            <h3 className="Send-Mail-Title">Отправить по элекронной почте</h3>
            <form 
            className="SendMail-Wrapper"
            onSubmit={sendEmail}
            ref={form}
            id="Send-Form"
            >
                <input 
                type="email" 
                className="SendMail-Input"
                required
                placeholder="Ваш email"
                name="email"
                value={emailText}
                onChange={emailSelect}
                >

                </input>
                <button 
                className="SendMail-Button"
                form="Send-Form"
                >
                Отправить</button>
                <ToastContainer 
                theme="light"
                />
            </form>
        </div>
    );
};