import React, { PureComponent } from 'react';
import Button from 'unify-react-mobile/build/Button';
import BottomSheet from 'unify-react-mobile/build/BottomSheet';

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
          <Button secondary block onClick={this.toggleDisplay}>Open Full Page Bottom Sheet</Button>
        </div>
        <BottomSheet full title="Title of Information"
          display={this.state.display}
          onClose={this.toggleDisplay}>
            <p>This is content section.</p>
        </BottomSheet>
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
