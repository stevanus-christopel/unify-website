import React from 'react';
import { BottomNav } from 'unify-react-mobile';

const ComponentDemo = (
    <div>
        <BottomNav items={
            [
              { key: 0, icon: require("../images/bottom-nav.svg"), iconActive: require("../images/bottom-nav-active.svg"), text: 'Home', onClick: function(){ alert('Hello Item 1'); } },
              { key: 1, icon: require("../images/bottom-nav.svg"), iconActive: require("../images/bottom-nav-active.svg"), text: 'Hotlist', onClick: function(){ alert('Hello Item 2'); } },
              { key: 2, icon: require("../images/bottom-nav.svg"), iconActive: require("../images/bottom-nav-active.svg"), text: 'Wishlist', onClick: function(){ alert('Hello Item 3'); } },
              { key: 3, icon: require("../images/bottom-nav.svg"), iconActive: require("../images/bottom-nav-active.svg"), text: 'Keranjang', onClick: function(){ alert('Hello Item 4'); } },
              { key: 4, icon: require("../images/bottom-nav.svg"), iconActive: require("../images/bottom-nav-active.svg"), text: 'Lainnya', onClick: function(){ alert('Hello Item 5'); } },
            ]
            } indexActive={4}/>
    </div>
)

export default ComponentDemo;