import React, { PureComponent } from 'react';
import { Tab } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    indexActiveTabs: 0
  }
  handleChangeTab = (event, item) => {
    this.setState({indexActiveTabs: item.index});
  }
  render() {
    return (
      <Tab secondary
        items={[
          { index: 0, text: "Inbox", count: 3 },
          { index: 1, text: "Sent" },
          { index: 2, text: "Trash" }
        ]}
        indexActive={this.state.indexActiveTabs}
        onItemClick={this.handleChangeTab}
      />
    )
  }
}

export default <ComponentDemo />;
