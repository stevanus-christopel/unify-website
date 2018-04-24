import React, { PureComponent } from 'react';
import Select from 'unify-react-mobile/build/Select';

class ComponentDemo extends PureComponent {
  state = {
    selectDebugValue: 'Zunio'
  }

  handleSelectDebug = e => {
    this.setState({
      selectDebugValue: e.value
    })
  }

  render() {
    return(
      <Select
        label="Select"
        selectedOption={this.state.selectDebugValue}
        onChange={this.handleSelectDebug}
        info="Info text goes here">
        <option value="Zunio">Zunio</option>
        <option value="Stev">Stev</option>
        <option value="Boy">Boy</option>
      </Select>
    )
  }
}

export default <ComponentDemo />;
