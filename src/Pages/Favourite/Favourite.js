import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../asset/Nav/Nav";
import products from "../../asset/products.json";
import { removeItem } from "../../Context/favSlice";

export default function Fav() {
  let state = useSelector((state) => state);

  let dispatch = useDispatch();

  let item = products.map((product) => {
    function rmvItem(id) {
      let res = state.fav.FavArr.filter((el) => el !== id);

      dispatch(removeItem(res));
    }

    return state.fav.FavArr?.map((cart) => {
      if (cart == product.id) {
        return (
          <div key={product.id} className="cart-item">
            <img src={product.img} alt="" />
            <h4>{product.name}</h4>
            <p>
              <button onClick={() => rmvItem(product.id)}>(-)</button>
            </p>
          </div>
        );
      }
    });
  });
  return (
    <div>
      <Nav />
      <h1>Fav</h1>
      <div className="cart-cont">{item}</div>
    </div>
  );
}
