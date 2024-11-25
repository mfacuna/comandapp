import { Dispatch } from "react";
import formatCurrency from "../helpers";
import type { MenuItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type MenuItemProp = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>
};

export default function MenuItem({ item, dispatch }: MenuItemProp) {
  return (
    <>
      <div className="mr-3">
        <button
          className="rounded-md w-full flex justify-between p-3 bg-white hover:bg-teal-200"
          onClick={() => dispatch({type: 'add-item', payload: {item}})}
        >
          <p>{item.name}</p>
          <p className="font-bold">{formatCurrency(item.price)}</p>
        </button>
      </div>
    </>
  );
}
