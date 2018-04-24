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
      <React.Fragment>
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
      </React.Fragment>    
    )
  }
}

export default <ComponentDemo />;
