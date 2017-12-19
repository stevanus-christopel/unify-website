import React from 'react';
import { Ticker } from 'unify-react-mobile';

const ComponentDemo = (
    <div>
        <Ticker warning items={
            [
              { text: 'Type information with approx. 80 CHARACTER, for more or another direction 1.', action: 'Text Link', actionLink: '#' }
            ]
          } indexActive={0}
        />
    </div>
)

export default ComponentDemo;