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
      <Tab primary
        items={[
          { index: 0, text: "HOME" },
          { index: 1, text: "FEED" },
          { index: 2, text: "FAVORIT" }
        ]}
        indexActive={this.state.indexActiveTabs}
        onItemClick={this.handleChangeTab}
      />
    )
  }
}

export default <ComponentDemo />;
