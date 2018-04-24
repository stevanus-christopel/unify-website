import React, { PureComponent } from 'react';
import Toaster from 'unify-react-mobile/build/Toaster';
import Button from 'unify-react-mobile/build/Button';

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
          <Button secondary block onClick={this.toggleDisplay}>Toggle Error Toaster with Action</Button>
        </div>

        <Toaster error
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
