import "./InstructionButton.scss"


export const InstructionButton = ({href="#", ButtonClass="Instruction-Button"}) => {
    return(
        <a 
        className={ButtonClass} 
        href={href}
        target="blank"
        >Открыть инструкцию</a>
    );
};