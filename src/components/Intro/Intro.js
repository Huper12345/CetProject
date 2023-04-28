import './Intro.scss';

export const Intro = ({children}) => {
    return (
        <div className="Intro">
            <div className='container'>
                <div className="Intro-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};