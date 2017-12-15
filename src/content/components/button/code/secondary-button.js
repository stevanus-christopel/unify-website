import React from 'react';
import { Button } from 'unify-react-mobile';

import image from '../images/mail.svg'

const ComponentDemo = (
    <div>
        <div>
            <Button secondary small>Secondary Small</Button>
            &nbsp;&nbsp;
            <Button secondary medium>Secondary Medium</Button>
            &nbsp;&nbsp;
            <Button secondary large>Secondary Large</Button>
        </div>
        <br />
        <Button secondary block>Secondary Block</Button>
        <br />
        <Button secondary block image={image}>Secondary Block with Image</Button>
    </div>
)

export default ComponentDemo;