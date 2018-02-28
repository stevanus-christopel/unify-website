import React, { PureComponent } from 'react';
import { Slider } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    single: 25,
    double: 75
  }

  render() {
    return(
      <Slider 
        min={0}
        max={100} 
        value={this.state.single}
        doubleValue={this.state.double}
        double
        step={1}
        separator={4}
        block
        onChange={(value) => { this.setState({single: value}) }}
        onChangeDouble={(value) => { this.setState({double: value}) }}
      />
    )
  }
}

export default <ComponentDemo />;
