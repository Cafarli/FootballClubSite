import "./cartItem.css";
import { IoIosClose } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { useDispatch } from "react-redux";
import { increaseQtyAction, decreaseQtyAction, removeCartAction } from "../../Redux/action/actions";

export function CartItem(props) {
  const dispatch = useDispatch();

  return (
    <tr className="cartItem">
      <td className="pImg">
        <img alt="product" src={props.img[0]}></img>
      </td>
      <td className="pName">{props.title}</td>
      <td className="pPri">{props.price} &#8380;</td>
      <td className="pBtn">
        <div className="incDec">
          <p className="incDec-value">{props.qty}</p>
          <div className="incDec-buttons">
            <p className="inc" onClick={()=>dispatch(increaseQtyAction(props.id))}><MdKeyboardArrowUp/></p>
            <p className="dec" onClick={()=>dispatch(decreaseQtyAction(props.id))}><MdKeyboardArrowDown/></p>
          </div>
        </div>
      </td>
      <td className="pSTotal">{parseFloat(props.price*props.qty).toFixed(2)} &#8380;</td>
      <td className="pRemove">
        <IoIosClose onClick={() => dispatch(removeCartAction(props.id))} />
      </td>
    </tr>
  );
}
