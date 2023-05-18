import "./Footer.scss"
import { LogoBorimed } from "./LogoBorimed";


export const Footer = () => {
    return(
        <footer className="Footer">
            <div className="container">
                <div className="Footer-Inner">
                    <div className="Footer-Item">
                        <LogoBorimed />
                    </div>
                </div>
            </div>
        </footer>
    );
};