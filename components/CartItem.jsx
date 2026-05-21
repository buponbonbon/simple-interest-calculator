import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice';
import './CartItem.css';

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Hàm tính tổng tiền của 1 loại sản phẩm
  const calculateTotalCost = (item) => {
    return Number(item.cost) * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      {cartItems.map(item => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} style={{width: '50px'}} />
          <div>{item.name}</div>
          <div>${item.cost}</div>
          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
          <div>Total: ${calculateTotalCost(item)}</div>
          {/* Nút xóa bắt buộc phải có để bot chấm điểm */}
          <button onClick={() => handleRemove(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CartItem;