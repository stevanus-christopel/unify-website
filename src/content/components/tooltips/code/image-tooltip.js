import React, { PureComponent } from 'react';
import { Button, Tooltip } from 'unify-react-mobile';

import image from '../images/icon-tooltip.svg';

class ComponentDemo extends PureComponent {
  state = {
    display: false
  }
  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    })
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Button secondary block onClick={this.toggleDisplay}>Open Tooltip with Image</Button>
        </div>
        <Tooltip title="Title Goes Here" actionText="Saya Mengerti" image={image}
          root={document.getElementById("root")}
          display={this.state.display}
          onClose={this.toggleDisplay}
          onActionClick={this.toggleDisplay}>
            Type your information about the hint in a compact way, don’t take it to long.
        </Tooltip>
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
