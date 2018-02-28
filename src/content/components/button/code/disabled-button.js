import React from 'react';
import { Button } from 'unify-react-mobile';

import image from '../images/mail.svg'

const ComponentDemo = (
    <div>
        <div>
            <Button small disabled>Disabled Small</Button>
            &nbsp;&nbsp;
            <Button medium disabled>Disabled Medium</Button>
            &nbsp;&nbsp;
            <Button large disabled>Disabled Large</Button>
        </div>
        <br />
        <Button block disabled>Disabled Block</Button>
        <br />
        <Button block disabled image={image}>Disabled Block with Image</Button>
    </div>
)

export default ComponentDemo;
