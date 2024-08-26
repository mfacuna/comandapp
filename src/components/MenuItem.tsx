import formatCurrency from "../helpers";
import type { MenuItem } from "../types";

type MenuItemProp = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProp) {
  return (
    <>
      <div className="mr-3">
        <button
          className="rounded-md w-full flex justify-between p-3 bg-white hover:bg-teal-200"
          onClick={() => addItem(item)}
        >
          <p>{item.name}</p>
          <p className="font-bold">{formatCurrency(item.price)}</p>
        </button>
      </div>
    </>
  );
}
