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
      <div style={{backgroundColor: '#FFF', border: '1px solid #E0E0E0'}}>
        <Tab secondary
          items={[
            { key: 0, text: "Inbox", count: 3 },
            { key: 1, text: "Sent" },
            { key: 2, text: "Trash" }
          ]}
          indexActive={this.state.indexActiveTabs}
          onItemClick={this.handleChangeTab} >
          
            <TabContent>
              <h1>Inbox Content</h1>
            </TabContent>

            <TabContent>
              <h1>Sent Content</h1>
            </TabContent>

            <TabContent>
              <h1>Trash Content</h1>
            </TabContent>

        </Tab>
      </div>
    )
  }
}

export default <ComponentDemo />;
