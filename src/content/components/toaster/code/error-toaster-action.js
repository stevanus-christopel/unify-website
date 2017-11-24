import React from 'react';
import { Toaster } from 'unify-react-mobile';

const ComponentDemo = (
    <div>
        <Toaster error actionText="OK" onActionClick={() => alert('Hello World..')}>
            The content goes here, use red color for any errors, and maximum 2 lines 
        </Toaster>
    </div>
)

export default ComponentDemo;