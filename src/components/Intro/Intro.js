import './Intro.scss';

import { TopButton } from '../../helpers/components/TopButton';

export const Intro = ({children, className="Intro-inner", className2="Intro"}) => {

    return (
        <div id='Intro' className={className2}>
            <div className='container'>
                <div className={className}>
                    <TopButton />
                    {children}
                </div>
            </div>
        </div>
    );
};