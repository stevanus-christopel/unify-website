import React, { PureComponent } from 'react';
import { Button, Menu } from 'unify-react-mobile';

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
          <Button secondary block onClick={this.toggleDisplay}>Open Normal Menu</Button>
        </div>
        <Menu display={this.state.display} items={
            [
              { key: 1, text: 'First Content Goes Here', onClick: this.toggleDisplay },
              { key: 2, text: 'Second Content Goes Here', onClick: this.toggleDisplay },
              { key: 3, text: 'Third Content Goes Here', onClick: this.toggleDisplay },
            ]
          }
          actionText="Call to Action Here"
          onClose={this.toggleDisplay}
          onAction={this.toggleDisplay}
        />
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
