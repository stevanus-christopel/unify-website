import React, { PureComponent } from 'react';
import Checkbox from 'unify-react-mobile/build/Checkbox';

class ComponentDemo extends PureComponent {
  state = {
    checked: false
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return(
      <div className='selection-control-wrapper'>
        <Checkbox
          value='Checkbox value'
          useLabel
          checked={this.state.checked}
          onChange={this.handleChange} />

        <Checkbox
          value='Checkbox value'
          checked />

        <Checkbox
          value='Checkbox value'
          disabled />
      </div>    
    )
  }
}

export default <ComponentDemo />;
