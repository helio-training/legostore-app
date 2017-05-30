import React, { Component } from 'react';

import { AppBar, Drawer, MenuItem } from 'material-ui';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <div>
        <AppBar
          title="Figures"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={e => this.setState({ open: !this.state.open })}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
          <MenuItem primaryText="Home" href="/" />
          <MenuItem primaryText="Cart" href="/cart" />
        </Drawer>
      </div>
    );
  }
}