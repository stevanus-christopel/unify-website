import React, { PureComponent } from 'react';
import { Tab, TabContent } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    indexActiveTabs: 0
  }
  handleChangeTab = (event, props) => {
    this.setState({indexActiveTabs: props.index});
  }
  render() {
    return (
      <Tab primary
        items={[
          { key: 0, text: "HOME" },
          { key: 1, text: "FEED" },
          { key: 2, text: "FAVORIT" }
        ]}
        indexActive={this.state.indexActiveTabs}
        onItemClick={this.handleChangeTab} >
        
        <TabContent index={0}>
          <h1>Text 1 Content</h1>
          <p>Text 1 Content</p>
        </TabContent>

        <TabContent index={2}>
          <h1>Text 3 Content</h1>
          <p>Text 3 Content</p>
        </TabContent>

      </Tab>
    )
  }
}

export default <ComponentDemo />;
