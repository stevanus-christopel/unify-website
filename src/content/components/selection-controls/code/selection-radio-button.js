import React, { PureComponent } from 'react';
import { Radio } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    checked: 'option2'
  }

  handleChange = (e) => {
    this.setState({
      checked: e.value
    })
  }

  render() {
    return(
      <React.Fragment>
        <Radio 
          value='option1'
          checked={this.state.checked === 'option1'}
          onChange={this.handleChange} />

        <Radio 
          value='option2'
          checked={this.state.checked === 'option2'}
          onChange={this.handleChange}
        />

        <Radio 
          value='Radio Value'
          disabled
        />
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
