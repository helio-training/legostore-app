import React from 'react';

import { Badge, FontIcon } from 'material-ui';

const cartOverview = {
  // width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  color: 'white'
};

export default () => (
  <div style={{ ...cartOverview }} className='cart-overview'>
    <Badge badgeContent={0} badgeStyle={{ top: 12, right: 0 }}>
      <a href="/cart">
        <FontIcon className="material-icons" style={{
          fontSize: '200%',
          color: '#FFAB91'
        }}>shopping_cart</FontIcon>
      </a>
    </Badge>
  </div>
)