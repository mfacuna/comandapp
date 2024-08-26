import formatCurrency from "../helpers";
import { OrderItem } from "../types";
import { useMemo } from "react";

type OrderTotalsProp = {
  order: OrderItem[];
  tip: number;
};

export default function OrderTotals({ order, tip }: OrderTotalsProp) {
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
      </div>
    </div>
  );
}
