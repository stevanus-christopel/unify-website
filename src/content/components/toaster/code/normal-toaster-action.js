import React from 'react';
import { Toaster } from 'unify-react-mobile';

const ComponentDemo = (
    <div>
        <Toaster actionText="OK" onActionClick={() => alert('Hello World..')}>
            The content goes here, use green color for any info, and maximum 2 lines 
        </Toaster>
    </div>
)

export default ComponentDemo;