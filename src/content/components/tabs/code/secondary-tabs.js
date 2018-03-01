import React, { PureComponent } from 'react';
import { Tab } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    indexActiveTabs: 0
  }
  handleChangeTab = (event, item) => {
    this.setState({indexActiveTabs: item.key});
  }
  render() {
    return (
      <Tab secondary
        items={[
          { key: 0, text: "Inbox", count: 3 },
          { key: 1, text: "Sent" },
          { key: 2, text: "Trash" }
        ]}
        indexActive={this.state.indexActiveTabs}
        onItemClick={this.handleChangeTab}
      />
    )
  }
}

export default <ComponentDemo />;
