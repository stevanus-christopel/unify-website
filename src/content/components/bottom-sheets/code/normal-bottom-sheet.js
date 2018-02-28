import React, { PureComponent } from 'react';
import { Button, BottomSheet } from 'unify-react-mobile';

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
          <Button secondary block onClick={this.toggleDisplay}>Open Normal Bottom Sheet</Button>
        </div>
        <BottomSheet title="Title of Information"
          root={document.getElementById("root")}
          display={this.state.display}
          onClose={this.toggleDisplay}>
            <p>This is content section.</p>
        </BottomSheet>
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
