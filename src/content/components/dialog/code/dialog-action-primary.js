import React from 'react';
import { Dialog } from 'unify-react-mobile';

const ComponentDemo = (
  <Dialog
    title="Title Goes Here"
    actionPrimaryText="CTA Here" onActionPrimaryClick={() => alert('CTA Primary')}
  >
    Make the copy compact to communicate what you want, approx 50 character like this
  </Dialog>
);

export default ComponentDemo;
