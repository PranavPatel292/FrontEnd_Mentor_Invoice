export const VIDetails = () => {
  return (
    <>
      <div className="flex flex-col space-y-5 shadow-xl px-5 md:p-5">
        <div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex flex-col">
            <p>#ID</p>
            <p>Graphic Design</p>
          </div>
          <div>
            <p>19 Union Terrace</p>
            <p>London</p>
            <p>E1 3EZ</p>
            <p>United Kingdom</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:space-x-5">
          <div className="flex flex-row w-full space-x-5 md:w-2/3 ">
            <div className="flex flex-col w-full ">
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col">
                  <p>Invoice Date</p>
                  <p>21 Aug 2021</p>
                </div>

                <div className="flex flex-col">
                  <p>Payment Date</p>
                  <p>21 Sep 2021</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full ">
              <div className="flex flex-col space-y-2">
                <label>Bill To</label>
                <div className="flex flex-col space-y-1">
                  <p>84 Church Street</p>
                  <p>Bradford</p>
                  <p>BDI 9PIB</p>
                  <p>United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-5 md:mt-0 w-full md:w-1/3">
            <label className="text-sm">Send to</label>
            <p>pranav.patel292@gmail.com</p>
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
                {/* row 1 */}
                <tr>
                  <td>Banner Design</td>
                  <td>1</td>
                  <td>AUD 400</td>
                  <td>AUD 400</td>
                </tr>
                {/* row 2 */}
                <tr className="active">
                  <th colSpan={3}>Amount Due</th>
                  <th>AUD 400</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:hidden overflow-y-scroll ">
            <table className="table  mb-10 w-full">
              <tbody>
                {/* row 1 */}
                <tr className="">
                  <td colSpan={2} className="whitespace-pre-wrap">
                    Banner Design
                    <br /> 1 * AUD 400
                  </td>
                  <td colSpan={2} className="text-right">
                    AUD 400
                  </td>
                </tr>

                <tr className="">
                  <td colSpan={2} className="whitespace-pre-wrap">
                    Banner Design
                    <br /> 1 * AUD 400
                  </td>
                  <td colSpan={2} className="text-right">
                    AUD 400
                  </td>
                </tr>

                {/* row 2 */}
                <tr className="active">
                  <th colSpan={2}>Amount Due</th>
                  <th colSpan={2} className="text-right">
                    AUD 400
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
