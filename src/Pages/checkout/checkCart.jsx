import "./checkCart.css";
import data from "../../data/fruits.json";
import { useSelector } from "react-redux";

export function CheckCart() {
  const data = useSelector(state=>state['products']);
  let total = useSelector(state=>state['total']);
  data !== undefined && !!data.length && data.slice(1).map((item,ind)=> {
    return (total += item.Price*item.Qty)
  })
  // DELIVER PRICE
  const deliver = 5;
  return (
    <div className="checkCart">
      <div className="ct-products">
        <table>
          <tbody>
            {data !== undefined &&
              !!data.length &&
              data.slice(1).map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="ctp-img">
                      <img alt="item" src={item.Photo[0]} />
                    </td>
                    <td className="ctp-title">{item.Title}</td>
                    <td className="ctp-qty">{item.Qty}</td>
                    <td className="ctp-sbtotal">
                      &#8380; {item.Price * item.Qty}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <section className="cc-total">
          <ul>
            <ol>
              <span className="cct-head">Ümumi</span>
              <span className="cct-value">&#8380; {total}</span>
            </ol>
            <ol>
              <span className="cct-head">Çatdırılma</span>
              <span className="cct-value">&#8380; {deliver}</span>
            </ol>
            <ol>
              <span className="cct-head">Yekun</span>
              <span className="cct-value">&#8380; {total+deliver}</span>
            </ol>
          </ul>
        </section>
      </div>
    </div>
  );
}
