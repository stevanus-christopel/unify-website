import React, { PureComponent } from 'react';
import TextArea from 'unify-react-mobile/build/TextArea';

class ComponentDemo extends PureComponent {
  state = {
    value: ''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })  
  }

  render() {
    return(
      <div>
        <TextArea label="Text Area" onChange={this.handleChange} value={this.state.value}/>
        <TextArea label="Disabled Text Area" disabled />
        <TextArea label="Password Text Area" type="password" />
        <TextArea label="Label" placeholder="Placeholder" />
        <TextArea label="Counter Text Area" counter={20} />
        <TextArea label="Label" message="This is info message." />
        <TextArea label="Label" message="This is error message." error />
        <TextArea label="Label" message="This is success message." success />
      </div>
    )
  }
}

export default <ComponentDemo />;
