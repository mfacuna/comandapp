import formatCurrency from "../helpers";
import { OrderItem, MenuItem } from "../types";
import { TiDelete } from "react-icons/ti";

type OrderContentsProp = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({ order, removeItem }: OrderContentsProp) {
  return (
    <>
      {order.length === 0 ? (
        <p className="text-center mb-5">La orden se encuentra vacía.</p>
      ) : (
        order.map((item) => (
          <div className="flex justify-between p-1 mr-2 border-t-2 last-of-type:border-b-2 border-teal-400 items-center text-xs">
            <div className="w-full">
              <div className="w-full grid grid-cols-2" key={item.id}>
                <p>{item.name}</p>
                <p className="text-end">
                  {item.quantity} x {formatCurrency(item.price)}
                </p>
              </div>
              <div>
                <p className="text-end font-bold">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
            <div>
              <button onClick={() => removeItem(item.id)} className="text-4xl text-red-400 hover:text-red-500 ml-3 ">
                <TiDelete />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
