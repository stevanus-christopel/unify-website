import React, { PureComponent } from 'react';
import Slider from 'unify-react-mobile/build/Slider';

class ComponentDemo extends PureComponent {
  state = {
    single: 25,
    double: 75
  }

  render() {
    return(
      <div className='slider-wrapper'>
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
      </div>
    )
  }
}

export default <ComponentDemo />;
