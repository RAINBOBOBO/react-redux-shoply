import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';


/** ItemDetail
 * 
 * App -> ItemDetail
 */
function ItemDetail({ items, addItemToCart, removeItemFromCart }) {
  const { id } = useParams();

  if (!(id in items)) return <Redirect to="/" />;
  let item = items[id]

  function handleAddToCart(evt) {
    addItemToCart(id, item);
  }

  function handleRemoveFromCart(evt) {
    removeItemFromCart(id, item);
  }

  return (
    <div className='Item card'>
      <div className='card-img-top'>
        <img src={item.image_url} width="200" height="auto" />
      </div>
      <div className='card-body'>
        <div className='card-title'>
          <h2><Link to={`/products/${id}`}>{item.name}</Link></h2>
        </div>
        <div className='card-text'>
          <p>$ {item.price}</p>
          <button onClick={handleAddToCart}>
            <i className="fas fa-cart-plus"></i>
          </button>
          <button onClick={handleRemoveFromCart}>
            <i className="fas fa-cart-arrow-down"></i>
          </button>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;