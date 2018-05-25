import React, { PureComponent } from 'react';
import Radio from 'unify-react-mobile/build/Radio';

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
      <div className='selection-control-wrapper'>
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
      </div>
    )
  }
}

export default <ComponentDemo />;
