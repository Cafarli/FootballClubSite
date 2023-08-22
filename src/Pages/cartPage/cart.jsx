import "./cart.css";
import { CartItem } from "./cartItem";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Cart() {
  const cartItems = useSelector(state => state.all.products);
  let total = useSelector(state => state.all.total);
  const tax = 5.00;
  
  cartItems !== undefined &&
    !!cartItems.length &&
    cartItems.slice(1).map((item, ind) => {
      return (
        total+= parseFloat(item.pPrice*item.pQty)
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
                    id={item.pId}
                    title={item.pTitle}
                    img={item.pPhoto}
                    price={item.pPrice}
                    qty={item.pQty}
                  /> 
              );
            })}
          </tbody>
        </Table>
        <div className="check"  style={{display: cartItems.length>1 ? "block": "none"}}>
          <div className="cartTotal">
            <p>Subtotal</p>
            <p>{parseFloat(total)} &#8380;</p>
          </div>
          <div className="cartTax">
            <p>Cargo</p>
            <p>{total!==0 ? tax : 0} &#8380;</p>
          </div>
          <div className="cartTax">
            <p>Total</p>
            <p>{total!==0 ? total+tax : 0} &#8380;</p>
          </div>
          <div className="proceed">
            <Link to="/checkout"><button>Confirm purchase</button></Link>
          </div>
        </div>
      </div>
      <div className="contShop" style={{display: cartItems.length>1 ? "block": "none"}}>
        <Link to="/"><button>Continue shopping</button></Link>
      </div>
      <div className="messageToClient" style={{display: cartItems.length>1 ? "none": "block"}}>
        <h1>No product in basket</h1>
      </div>
    </div>
  );
}
