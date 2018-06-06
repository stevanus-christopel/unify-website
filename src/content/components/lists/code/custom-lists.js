import React from 'react';
import List from 'unify-react-mobile/build/List';
import Label from 'unify-react-mobile/build/Label';

const GlobalText = props => <span style={{padding: '8px 0'}}>{props.text}</span>
const BoldGreenText = props => <b style={{color: '#42b549', padding: '8px 0'}}>{props.text}</b>
const LabelUnify = props => <div style={{padding: '4px 0'}}><Label backgroundColor='#42b549' textColor='#FFFFFF' large>{props.text}</Label></div>
const ComponentDemo = (
  <List subheader="Subheader"
    items={[
      { text: "Text with global template"},
      { text: "Text with global template"},
      { text: "Text with global template"},
      { text: "Text with custom template", template: BoldGreenText},
      { text: "Text with custom template", template: LabelUnify}
    ]}
    template={GlobalText}
  />
)

export default ComponentDemo;
