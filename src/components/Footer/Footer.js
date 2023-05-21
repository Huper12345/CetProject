import "./Footer.scss"
import { LogoBorimed } from "./LogoBorimed";
import { FooterNav } from "./FooterNav";
import { Contacts } from "./Contacts";


export const Footer = ({InstructionLink, InstructionButtonStatus}) => {
    return(
        <footer id="Footer" className="Footer">
            <div className="container">
                <div className="Footer-Inner">
                    <div className="Footer-Item">
                        <LogoBorimed />
                        <FooterNav />
                    </div>
                    <div className="Footer-Item">
                        <Contacts 
                        InstructionLink={InstructionLink}
                        ButtonStatus={InstructionButtonStatus}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};