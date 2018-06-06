import React from 'react';
import Label from 'unify-react-mobile/build/Label';

const ComponentDemo = (
  <div className='label-wrapper'>
    <div>
      <Label backgroundColor='#42B549' textColor='#FFFFFF'>
        Label small
      </Label>
      <Label medium backgroundColor='#42B549' textColor='#FFFFFF'>
        Label medium
      </Label>
      <Label large backgroundColor='#42B549' textColor='#FFFFFF'>
        Label large
      </Label>
    </div>
    <div>
      <Label large cashback backgroundColor='rgba(0, 0, 0, 0.7)' textColor='#FFFFFF'>
        Label large with saldo icon
      </Label>
    </div>
    <div>
      <Label large time backgroundColor='#FF5722' textColor='#FFFFFF'>
        Label large with time icon
      </Label>
    </div>
  </div>
)

export default ComponentDemo;
