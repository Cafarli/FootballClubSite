import "./cart.css";
import { CartItem } from "./cartItem";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Cart() {
  const cartItems = useSelector(state => state['products']);
  let total = useSelector(state => state['total']);
  const tax = 5.00;
  cartItems !== undefined &&
    !!cartItems.length &&
    cartItems.slice(1).map((item, ind) => {
      return (
        total+= parseFloat(item.Price*item.Qty)
      )
    })
    
  return (
    <div className="cartPage">
      <div className="cartDetails">
        <Table className="cart">
          <tbody>
          {cartItems !== undefined &&
            !!cartItems.length &&
            cartItems.slice(1).map((item, ind) => {
              return (
                <CartItem
                    key={ind}
                    id={item.Id}
                    title={item.Title}
                    img={item.Photo}
                    price={item.Price}
                    qty={item.Qty}
                  /> 
              );
            })}
          </tbody>
        </Table>
        <div className="check">
          <div className="cartTotal">
            <p>Subtotal</p>
            <p>{parseFloat(total)}</p>
          </div>
          <div className="cartTax">
            <p>Tax</p>
            <p>{total!==0 ? tax : 0}</p>
          </div>
          <div className="cartTax">
            <p>Total</p>
            <p>{total!==0 ? total+tax : 0}</p>
          </div>
          <div className="proceed">
            <Link to="/checkout"><button>Confirm purchase</button></Link>
          </div>
        </div>
      </div>
      <div className="contShop">
        <Link to="/"><button>Continue</button></Link>
      </div>
    </div>
  );
}
