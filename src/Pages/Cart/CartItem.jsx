import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
    removeFromCart,
    adjustItemQty,
} from "../../Redux/Action/ProductsAction";
const CartItem = ({ item, removeFromCart, adjustItemQty }) => {

    const [adjustQty, setAdjustQty] = useState(item?.qty);

    const inputAdjust = (e) => {
        setAdjustQty(e.target.value);
        adjustItemQty(item.id, e.target.value);

    };

    let amt = item?.qty * item.price
    return (

        <tbody>
            <tr>
                <td>
                    <img
                        src={item?.image}
                        alt="item"
                        style={{
                            height: "80px",
                            width: "100%",
                            objectFit: "contain",
                        }}
                    />
                </td>
                <td>
                    <p>{item?.title}</p>
                </td>
                <td>$ {item?.price}</td>
                <td>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={adjustQty}
                        onChange={inputAdjust}
                    />
                </td>
                <td>
                    {Math.floor(amt)}
                </td>
                <td>
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => removeFromCart(item.id)}
                        style={{ color: "red" }}
                    />
                </td>
            </tr>


        </tbody>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value)),
    };
};
export default connect(null, mapDispatchToProps)(CartItem);
