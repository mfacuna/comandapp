import formatCurrency from "../helpers";
import { OrderActions } from "../reducers/order-reducer";
import { OrderItem } from "../types";
import { Dispatch, useMemo } from "react";

type OrderTotalsProp = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>
};

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProp) {
  const subtotalAmount = useMemo(
    () => order.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip , [tip, order])

  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

  return (
    <div>
      <h2 className="text-slate-600 text-xl mb-4">Totales y Propina</h2>
      <div className="space-y-2">
        <div className="w-full grid grid-cols-2">
          <p>Subtotal a pagar:</p>
          <p className="text-end">{formatCurrency(subtotalAmount)}</p>
        </div>

        <div className="w-full grid grid-cols-2">
          <p>Propina:</p>
          <p className="text-end">{formatCurrency(tipAmount)}</p>
        </div>

        <div className="w-full grid grid-cols-2 font-bold">
          <p>Total:</p>
          <p className="text-end">{formatCurrency(totalAmount)}</p>
        </div>

        <button
          className="w-full p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-md disabled:opacity-10"
          disabled={totalAmount === 0}
          onClick={() => dispatch({type: 'place-order'})}
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
