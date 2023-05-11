import "./InstructionButton.scss"


export const InstructionButton = ({href="#", linkText}) => {
    return(
        <a 
        className="Instruction-Button" 
        href={href}
        target="blank"
        >Открыть инструкцию</a>
    );
};