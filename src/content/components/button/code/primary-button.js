import React from 'react';
import { Button } from 'unify-react-mobile';

import image from '../images/social.svg'

const ComponentDemo = (
    <div>
        <div>
            <Button primary small>Primary Small</Button>
            &nbsp;&nbsp;
            <Button primary medium>Primary Medium</Button>
            &nbsp;&nbsp;
            <Button primary large>Primary Large</Button>
        </div>
        <br />
        <Button primary block>Primary Block</Button>
        <br />
        <Button primary block image={image}>Primary Block with Image</Button>
    </div>
)

export default ComponentDemo;