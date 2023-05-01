import './Intro.scss';

export const Intro = ({children, className="Intro-inner", className2="Intro"}) => {
    return (
        <div className={className2}>
            <div className='container'>
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    );
};