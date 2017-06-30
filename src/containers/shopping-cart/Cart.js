import React, { Component } from 'react';

import Cart from '../../storage/cart';

import './Cart.css';


export default class extends Component {

  state = {
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  };

  componentDidMount() {

    const { subtotal, tax, total } = Cart;

    this.setState({
      items: Cart.get(),
      subtotal,
      tax,
      total,
    });
  }

  onQuantityChange = (e, item) => {
    const items = Cart.changeQuantity(item.id, e.target.value);
    const { subtotal, total, tax } = Cart;
    this.setState({
      items,
      subtotal,
      total,
      tax,
    });
  };


  render() {

    const { subtotal, tax, total, items } = this.state;

    return (
      <div>
        <h1>Cart</h1>

        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Item Total</th>
            </tr>
          </thead>
          <tbody>
            { items.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="0"
                      onChange={e => this.onQuantityChange(e, item)} />
                  </td>
                  <td>$ {item.price}</td>
                  <td>$ {item.quantity * item.price}</td>
                </tr>
              );
            })}

          </tbody>
        </table>


        <div>
          <strong>Subtotal:</strong> $ {subtotal}
        </div>
        <div>
          <strong>Tax:</strong> $ {tax}
        </div>
        <div>
          <strong>Total:</strong> $ {total}
        </div>

      </div>
    );
  }
}