import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  {
    id: "tip-0",
    value: 0,
    label: "0%",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPrecentageFormProps = {
  dispatch: Dispatch<OrderActions>;
};

export default function TipPercentageForm({
  dispatch,
}: TipPrecentageFormProps) {
  return (
    <div>
      <h2 className="text-slate-600 text-xl mb-4">Propina</h2>
      <div className="flex items-center gap-2">
        <select
          id="tip-percentage"
          onChange={(e) =>
            dispatch({ type: "add-tip", payload: { value: +e.target.value } })
          }
          name="tip-percentage"
          className="border-2 border-gray-300 rounded-md px-3 py-2 w-full md:w-2/3"
          defaultValue={tipOptions[1].value}
        >
          {tipOptions.map((option) => (
            <option className="" key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
