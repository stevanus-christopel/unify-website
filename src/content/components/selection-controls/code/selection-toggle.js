import React, { PureComponent } from 'react';
import Toggle from 'unify-react-mobile/build/Toggle';

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
      </div>
    )
  }
}

export default <ComponentDemo />;
