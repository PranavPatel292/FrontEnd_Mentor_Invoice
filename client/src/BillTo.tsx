interface BillFromProps {
  register: any;
  errors: any;
}

export const BillTo = ({ register, errors }: BillFromProps) => {
  return (
    <>
      <p>Bill To</p>
      <div className="flex w-full flex-col space-y-5">
        <div className="flex w-full flex-col ">
          <label className="text-sm">Client's Name</label>
          <input
            {...register("billToClientName")}
            className="rounded w-[100%] p-2"
          />
        </div>

        <div className="flex w-full flex-col ">
          <label className="text-sm">Client's Email</label>
          <input
            {...register("billToClientEmail")}
            className="rounded w-[100%] p-2"
          />
        </div>

        <div className="flex w-full flex-col ">
          <label className="text-sm">Client's Street Address</label>
          <input
            {...register("billToClientEmail")}
            className="rounded w-[100%] p-2"
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:space-x-5">
          <div className="flex flex-row w-full space-x-5 md:w-2/3 ">
            <div className="flex flex-col w-full ">
              <label className="text-sm">City</label>
              <input
                {...register("billToCity")}
                className="rounded w-[100%] p-2"
              />
            </div>
            <div className="flex flex-col w-full ">
              <label className="text-sm">Postcode</label>
              <input
                {...register("billToPostCode")}
                className="rounded w-[100%] p-2"
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-sm">Country</label>
            <input
              {...register("billToCountry")}
              className="rounded w-[100%] p-2"
            />
          </div>
        </div>

        <div className="flex-col space-y-5  mt-5 md:mt-0 w-full md:justify-between">
          <div className="flex flex-col w-full ">
            <label className="text-sm">Invoice Date</label>
            <input
              type="date"
              {...register("invoiceDate")}
              className="rounded w-[100%] p-2"
            />
          </div>

          <div className="flex flex-col w-full ">
            <label className="text-sm">Payment Terms</label>
            <select
              {...register("paymentTerms")}
              className="rounded w-[100%] p-2"
            >
              <option value="INWEEK">In Week</option>
            </select>
          </div>
        </div>

        <div className="flex w-full flex-col ">
          <label className="text-sm">Product Description</label>
          <input
            {...register("projectDescription")}
            className="rounded w-[100%] p-2"
          />
        </div>
      </div>
    </>
  );
};
