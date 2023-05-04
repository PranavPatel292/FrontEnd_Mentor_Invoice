import dayjs from "dayjs";

interface VIDetails {
  data: any;
}

export const VIDetails = ({ data }: VIDetails) => {
  let paymentDate;
  let total: number = 0;
  switch (data.paymentTerms) {
    case "NEXTDAY": {
      paymentDate = dayjs(data.invoiceDate).add(1, "day");
      break;
    }
    case "INWEEK": {
      paymentDate = dayjs(data.invoiceDate).add(7, "day");
      break;
    }
    case "INFORTNIGHT": {
      paymentDate = dayjs(data.invoiceDate).add(14, "day");
      break;
    }
    case "INMONTH": {
      paymentDate = dayjs(data.invoiceDate).add(30, "day");
      break;
    }
  }
  return (
    <>
      <div className="flex flex-col space-y-5 shadow-xl px-5 md:p-5">
        <div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex flex-col">
            <p>#ID</p>
            <p>{data.id}</p>
          </div>
          <div>
            <p>{data.billFromStreetAddress}</p>
            <p>{data.billFromCity}</p>
            <p>{data.billFromPostcode}</p>
            <p>{data.billFromCountry}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:space-x-5">
          <div className="flex flex-row w-full space-x-5 md:w-2/3 ">
            <div className="flex flex-col w-full ">
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col">
                  <p>Invoice Date</p>
                  <p>{dayjs(data.invoiceDate).format("DD MMM YYYY")}</p>
                </div>

                <div className="flex flex-col">
                  <p>Payment Date</p>
                  <p>{dayjs(paymentDate).format("DD MMM YYYY")}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full ">
              <div className="flex flex-col space-y-2">
                <label>Bill To</label>
                <div className="flex flex-col space-y-1">
                  <p>{data.billToStreetAddress}</p>
                  <p>{data.billToCity}</p>
                  <p>{data.billToPostcode}</p>
                  <p>{data.billToCountry}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-5 md:mt-0 w-full md:w-1/3">
            <label className="text-sm">Send to</label>
            <p>{data.billToClientEmail}.</p>
          </div>
        </div>

        <div>
          <div className="hidden md:block overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {data.item?.map((item: any, index: number) => {
                  total += item.price * item.quantity;

                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                        }).format(item.price)}
                      </td>
                      <td>
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                        }).format(item.price * item.quantity)}
                      </td>
                    </tr>
                  );
                })}
                <tr className="active">
                  <th colSpan={3}>Amount Due</th>
                  <th>
                    {new Intl.NumberFormat("en-AU", {
                      style: "currency",
                      currency: "AUD",
                    }).format(total)}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:hidden overflow-y-scroll ">
            <table className="table  mb-10 w-full">
              <tbody>
                {/* row 1 */}

                {data.item?.map((item: any, index: number) => {
                  total += item.price * item.quantity;
                  return (
                    <tr key={index}>
                      <td colSpan={2} className="whitespace-pre-wrap">
                        {item.name}
                        <br /> {item.quantity} *{" "}
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                        }).format(item.price)}
                      </td>
                      <td colSpan={2} className="text-right">
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                        }).format(item.price * item.quantity)}
                      </td>
                    </tr>
                  );
                })}

                {/* row 2 */}
                <tr className="active">
                  <th colSpan={2}>Amount Due</th>
                  <th colSpan={2} className="text-right">
                    {new Intl.NumberFormat("en-AU", {
                      style: "currency",
                      currency: "AUD",
                    }).format(total)}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
