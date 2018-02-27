import React, { PureComponent } from 'react';
import { Slider } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    value: 5
  }
  render() {
    return(
      <Slider 
        min={0} 
        max={10} 
        value={this.state.value}
        step={1}
        separator={4}
        block
        onChange={(value) => { this.setState({value: value}) }}
      />
    )
  }
}

export default <ComponentDemo />;
