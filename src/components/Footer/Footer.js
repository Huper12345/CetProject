import "./Footer.scss"
import { LogoBorimed } from "./LogoBorimed";
import { FooterNav } from "./FooterNav";
import { Contacts } from "./Contacts";


export const Footer = (
    {InstructionLink,
     InstructionButtonStatus,
     Navhref1,
     Navtext1,
     Navhref2,
     Navtext2,
     Navhref3,
     Navtext3,
     Navhref4,
     Navtext4,
     Navroutelink1,
     Navroutetext1,
     Navroutelink2,
     Navroutetext2,
     Navroutelink3,
     Navroutetext3,
    
    }) => {
    return(
        <footer id="Footer" className="Footer">
            <div className="container">
                <div className="Footer-Inner">
                    <div className="Footer-Item">
                        <LogoBorimed />
                        <FooterNav 
                        href1={Navhref1}
                        text1={Navtext1}
                        href2={Navhref2}
                        text2={Navtext2}
                        href3={Navhref3}
                        text3={Navtext3}
                        href4={Navhref4}
                        text4={Navtext4}
                        routelink1={Navroutelink1}
                        routetext1={Navroutetext1}
                        routelink2={Navroutelink2}
                        routetext2={Navroutetext2}
                        routelink3={Navroutelink3}
                        routetext3={Navroutetext3}
                        />
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