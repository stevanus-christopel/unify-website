import React from 'react';
import { Slider } from 'unify-react-mobile';

const ComponentDemo = (
  <Slider 
    min={0} 
    max={10} 
    value={5}
    step={1}
    separator={4}
    block
    onChange={this.handleChangeSlider}
  />
)

export default ComponentDemo;
