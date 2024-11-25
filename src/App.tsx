import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import Categorias from "./components/Categorias";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { useReducer } from "react";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {

  const [state, dispatch]  = useReducer(orderReducer, initialState);

  return (
    <>
      <header className="bg-teal-400 py-5 border-b-4 mb-5">
        <h1 className="text-center text-4xl font-extralight text-white">
          Comandapp
        </h1>
      </header>

      <main className="max-w-7xl mx-auto font-sans">
        <div className="grid md:grid-cols-2">
          <div className="p-5 m-3 rounded-md bg-teal-100 bg-opacity-85 shadow-md h-fit overflow-hidden">
            <div className="flex">
              <h2 className="text-teal-600 text-xl mb-4">Menú</h2>
              <Categorias />
            </div>

            <div className="space-y-3 overflow-y-auto scrollbar sm:max-h-96 max-h-52">
              {menuItems.map((item) => (
                <MenuItem 
                  key={item.id} 
                  item={item} 
                  dispatch={dispatch} />
              ))}
            </div>
          </div>
          <div className="p-5 m-3 rounded-md bg-amber-100 bg-opacity-85 shadow-md overflow-hidden">
            <h2 className="text-teal-600 text-xl mb-4">Consumo</h2>
            <div className="overflow-y-auto scrollbar sm:max-h-96 max-h-52">
              <OrderContents order={state.order} dispatch={dispatch} />
            </div>
          </div>
        </div>
        {state.order.length !== 0 ? (
          <div className="grid md:grid-cols-2 rounded-md bg-slate-100 bg-opacity-85 shadow-md h-fit p-5 m-3 space-y-5 md:space-y-0">
            <TipPercentageForm dispatch={dispatch} />
            <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch} />
          </div>
        ) : null}
      </main>
    </>
  );
}

export default App;
