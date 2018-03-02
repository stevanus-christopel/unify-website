import React, { PureComponent } from 'react';
import { Toggle } from 'unify-react-mobile';

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
        <Toggle 
          value='Toggle value'
          checked={this.state.checked}
          onChange={this.handleChange}/>

        <Toggle 
          value='Toggle value'
          checked />

        <Toggle 
          value='Toggle value'
          disabled
        />

        <Toggle
          value='Toggle value'
          prependText='prependText'
          appendText='appendText'
        />
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
