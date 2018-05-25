import React from 'react';
import NavBar from 'unify-react-mobile/build/NavBar';

const ComponentDemo = (
    <div className='stepper-wrapper'>
        <NavBar inverted
            title="1 of 3 Steps"
            onBack="https://www.tokopedia.com"
            step={1} numberOfStep={3}
        />
    </div>
)

export default ComponentDemo;
