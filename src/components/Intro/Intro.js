import { createRef } from 'react';
import './Intro.scss';

import { TopButton } from '../../helpers/components/TopButton';


export const Intro = ({children, className="Intro-inner", className2="Intro"}) => {

const refComponent = createRef();

    return (
        <div ref={refComponent} id='Intro' className={className2}>
            <div className='container'>
                <div className={className}>
                    <TopButton refComponent={refComponent}/>
                    {children}
                </div>
            </div>
        </div>
    );
};