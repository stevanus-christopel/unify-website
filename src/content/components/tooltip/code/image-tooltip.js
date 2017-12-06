import React from 'react';
import { Tooltip } from 'unify-react-mobile';

import image from '../images/call.svg';

const ComponentDemo = (
    <div>
        <Tooltip title="Title Goes Here" actionText="Saya Mengerti" image={image}>
            Type your information about the hint in a compact way, don’t take it to long.
        </Tooltip>
    </div>
)

export default ComponentDemo;
