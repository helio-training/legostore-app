import React from 'react'


export default ({ figure, handleClick }) => (
  <section role="search-item" className="figure" onClick={handleClick}>
    <div><img src={figure.imageUrl} alt={figure.name} /></div>
    <h4>{figure.name}</h4>
    <div className="price">$ {figure.price}</div>
  </section>
)