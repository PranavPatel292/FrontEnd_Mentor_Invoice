interface BillFromProps {
  register: any;
  errors: any;
}

export const BillFrom = ({ register, errors }: BillFromProps) => {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <p>Bill From</p>
        <div className="flex w-full flex-col ">
          <label className="text-sm">Street Address</label>
          <input
            {...register("bill_from_streetAddress")}
            className="rounded w-[100%] p-2"
          />
          <p className="text-sm">{errors.bill_from_streetAddress?.message}</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-5">
          <div className="flex flex-row w-full space-x-5 md:w-2/3 ">
            <div className="flex flex-col w-full ">
              <label className="text-sm">City</label>
              <input
                {...register("bill_from_city")}
                className="rounded w-[100%] p-2"
              />
            </div>
            <div className="flex flex-col w-full ">
              <label className="text-sm">Postcode</label>
              <input
                {...register("bill_from_postCode")}
                className="rounded w-[100%] p-2"
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-sm">Country</label>
            <input
              {...register("bill_from_country")}
              className="rounded w-[100%] p-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
