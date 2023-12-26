import { BsFillTrashFill } from "react-icons/bs";
interface ListItemsProps {
  data: any;
  errors: any;
  register: any;
  remove: any;
  append: any;
}

export const ListItems = ({
  data,
  errors,
  register,
  remove,
  append,
}: ListItemsProps) => {
  const defaultValues = { item_name: "", quantity: 0, price: 0 };
  return (
    <>
      <p className="">Item List</p>
      {data.length > 0 && (
        <table className="hidden md:block">
          <thead>
            <th>Item Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Total</th>
          </thead>
          <tbody>
            {data.map((_: any, index: number) => {
              return (
                <tr key={index} className="">
                  <td className="pr-2">
                    <input
                      {...register(`items.${index}.item_name`)}
                      className=" md:w-[180px] p-2 rounded"
                    />
                  </td>
                  <td className="pr-2">
                    <input
                      {...register(`items.${index}.quantity`)}
                      className="w-[90px] p-2 rounded"
                    />
                  </td>
                  <td className="pr-2">
                    <input
                      {...register(`items.${index}.price`)}
                      className="w-[90px] p-2 rounded"
                    />
                  </td>
                  <td className="pr-8">
                    {new Intl.NumberFormat("en-AU", {
                      style: "currency",
                      currency: "AUD",
                    }).format(data[index].quantity * data[index].price)}
                  </td>
                  <td>
                    <BsFillTrashFill onClick={() => remove(index)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <div className="md:hidden flex flex-col space-y-10">
        {data.map((_: any, index: number) => {
          return (
            <div className="flex flex-col space-y-5 " key={index}>
              <div className="w-full flex flex-col">
                <label>Item name</label>
                <input
                  {...register(`items.${index}.item_name`)}
                  className="  p-2 rounded"
                />
              </div>

              <div className="flex flex-row space-x-5">
                <div className="flex flex-col">
                  <label>Qty.</label>
                  <input
                    type="number"
                    {...register(`items.${index}.quantity`)}
                    className="w-full p-2 rounded"
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <label>Price</label>
                  <input
                    type="number"
                    {...register(`items.${index}.price`)}
                    className="w-[90px] p-2 rounded"
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <label>Total</label>
                  <p>
                    {new Intl.NumberFormat("en-AU", {
                      style: "currency",
                      currency: "AUD",
                    }).format(data[index].quantity * data[index].price)}
                  </p>
                </div>

                <div className="flex flex-col mt-5 justify-center items-center">
                  <BsFillTrashFill onClick={() => remove(index)} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="btn btn-info rounded-2xl"
        onClick={() => append(defaultValues)}
      >
        + Add new data
      </button>
    </>
  );
};
