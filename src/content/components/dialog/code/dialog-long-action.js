import React from 'react';
import { Dialog } from 'unify-react-mobile';

const ComponentDemo = (
  <Dialog
    title="Title Goes Here" longAction
    actionPrimaryText="Long Text CTA Here" onActionPrimaryClick={() => alert('CTA Primary')}
    actionSecondaryText="CTA Here" onActionSecondaryClick={() => alert('CTA Secondary')}
  >
    Make the copy compact to communicate what you want, approx 50 character like this
  </Dialog>
);

export default ComponentDemo;
