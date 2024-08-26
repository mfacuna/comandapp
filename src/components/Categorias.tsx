export default function Categorias() {
  return (
    <>
      <div className="flex flex-row w-full space-x-2 ml-4 pr-4 justify-end rounded-md">
        <div className="flex items-center">
          <input
            id="platos"
            type="checkbox"
            value=""
            className="mr-1"
          />
          <label
            htmlFor="default-checkbox"
            className=""
          >
            Platos
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="bebidas"
            type="checkbox"
            value=""
            className="mr-1"
          />
          <label
            htmlFor="default-checkbox"
            className=""
          >
            Bebídas
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="postres"
            type="checkbox"
            value=""
            className="mr-1"
          />
          <label
            htmlFor="default-checkbox"
            className=""
          >
            Postres
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="tragos"
            type="checkbox"
            value=""
            className="mr-1"
          />
          <label
            htmlFor="default-checkbox"
            className=""
          >
            Tragos
          </label>
        </div>
      </div>
    </>
  );
}
