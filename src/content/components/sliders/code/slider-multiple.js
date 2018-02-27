import React from 'react';
import { Slider } from 'unify-react-mobile';

const ComponentDemo = (
  <Slider 
    min={0}
    max={10} 
    value={2}
    doubleValue={8}
    double
    step={1}
    separator={4}
    block
    onChange={this.handleChangeSlider}
    onChangeDouble={this.handleChangeSliderDouble}
  />
)

export default ComponentDemo;
