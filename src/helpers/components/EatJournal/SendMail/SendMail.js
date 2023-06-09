import "./SendMail.scss"
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from 'react-toastify';
import { SubTitle } from "../../SubTitle";
import 'react-toastify/dist/ReactToastify.css';



export const SendMail = () => {
    const [emailText, setEmailText] = useState("");
    const form = useRef();

    const NotifyYes = "custom-id-yes-Mail";
    const NotifyNo = "custom-id-no-Mail";

    const notifySucsesfully = () => {
        toast.success("Успешно отправлено", {
          toastId: NotifyYes,  
          position: toast.POSITION.TOP_RIGHT,
          });
    
    }

    const notifyFailed = () => {
        toast.error("Что-то пошло не так...", {
          toastId: NotifyNo,   
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
            <SubTitle Title="Отправить по электронной почте"/>
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
            </form>
        </div>
    );
};