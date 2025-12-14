import CartItem from "./CartItem.jsx";

function Cart({ cart, onUpdateQuantity, onRemove, total }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))
        )}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
