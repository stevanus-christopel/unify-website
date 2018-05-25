import React, { PureComponent } from 'react';
import Chip from 'unify-react-mobile/build/Chip';

class ComponentDemo extends PureComponent {
  state = {
    active: false
  }

  render() {
    return(
      <div>
        <Chip onClick={() => {this.setState({active: !this.state.active})}} 
          active={this.state.active}>Normal Chip</Chip>
        <Chip active>Active Chip</Chip>
        <br />
        <Chip onClose={(e) => {e.target.parentNode.remove()}}>Chip with onClose props</Chip>
        <br />
        <Chip>Chips with very very long text</Chip>
        <br/>
        <Chip loading={true}></Chip>
      </div>
    )
  }
}

export default <ComponentDemo />;
