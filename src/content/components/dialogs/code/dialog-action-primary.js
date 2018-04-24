import React, { PureComponent } from 'react';
import Button from 'unify-react-mobile/build/Button';
import Dialog from 'unify-react-mobile/build/Dialog';

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
          <Button secondary block onClick={this.toggleDisplay}>Open Primary Action Dialog</Button>
        </div>
        <Dialog
          title="Title Goes Here"
          actionPrimaryText="CTA Here"
          onActionPrimaryClick={this.toggleDisplay}
          display={this.state.display}
          onClose={this.toggleDisplay}>
          Make the copy compact to communicate what you want, approx 50 character like this
        </Dialog>
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
