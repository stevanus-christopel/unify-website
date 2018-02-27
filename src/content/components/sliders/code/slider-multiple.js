import React, { PureComponent } from 'react';
import { Slider } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    value: 2,
    doubleValue: 8
  }

  render() {
    return(
      <Slider 
        min={0}
        max={10} 
        value={this.state.value}
        doubleValue={this.state.doubleValue}
        double
        step={1}
        separator={4}
        block
        onChange={(value) => { this.setState({value: value}) }}
        onChangeDouble={(value) => { this.setState({doubleValue: value}) }}
      />
    )
  }
}

export default <ComponentDemo />;
