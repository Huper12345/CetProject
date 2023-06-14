import React from "react";
import "./Contacts.scss";
import { InstructionButton } from "../../../helpers/components/DosageUsage/InstructionButton";

export const Contacts = ({InstructionLink, ButtonStatus}) => {
  return (
    <div className="Contacts-Container" id="Contacts">
      <h2 className="Contacts-Title">
        Производитель - открытое акционерное общество «Борисовский завод
        медицинских препаратов» Республика Беларусь, г. Борисов, ул. Чапаева,
        64, 222518, +375(177) 76 97 63
      </h2>
      <h3 className="Contacts-Subtext">
        ЛЕКАРСТВЕННЫЙ ПРЕПАРАТ. ПЕРЕД ПРИМЕНЕНИЕМ ОЗНАКОМЬТЕСЬ С ИНСТРУКЦИЕЙ И
        ПРОКОНСУЛЬТИРУЙТЕСЬ С ВРАЧОМ
      </h3>
      <InstructionButton 
      ButtonClass={ButtonStatus}
       href={InstructionLink}
       />
    </div>
  );
};
