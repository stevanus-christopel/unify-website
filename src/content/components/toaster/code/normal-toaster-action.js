import React, { PureComponent } from 'react';
import { Button, Toaster } from 'unify-react-mobile';

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
          <Button secondary block onClick={this.toggleDisplay}>Toggle Normal Toaster with Icon</Button>
        </div>

        <Toaster
          actionText="OK"
          onActionClick={this.toggleDisplay}
          display={this.state.display}>
            The content goes here, use red color for any errors, and maximum 2 lines
        </Toaster>
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
