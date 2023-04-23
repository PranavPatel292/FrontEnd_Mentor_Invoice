import * as dayjs from "dayjs";
import { ReactComponent as RightArrow } from "../assets/icon-arrow-right.svg";

export const InvoiceItem = () => {
  const data = {
    id: "#12321",
    date: new Date(),
    name: "Pranav Patel",
    amount: 1022.12,
    status: "paid",
  };

  let statusBox = "";
  switch (data.status) {
    case "paid":
      statusBox = "badge-success";
      break;
    case "pending":
      statusBox = "badge-warning";
      break;
  }

  return (
    <>
      <div className="hidden md:block w-full hover:cursor-pointer ">
        <div className="p-5 md:flex md:flex-row md:justify-between md:items-center md:shadow-lg bg-primary/5 rounded-lg">
          <p className="">{data.id}</p>
          <p className="">Due {dayjs(data.date).format("DD MMM YYYY")}</p>
          <p className="">{data.name}</p>
          <p className="">
            {new Intl.NumberFormat("en-AU", {
              style: "currency",
              currency: "AUD",
            }).format(data.amount)}
          </p>
          <p className={`badge badge-outline p-4 rounded-lg ${statusBox}`}>
            {data.status}
          </p>
          <RightArrow className="sm:hidden md:block" />
        </div>
      </div>

      <div className="block md:hidden w-full hover:cursor-pointer">
        <div className="p-5 grid grid-cols-2 gap-4 bg-primary/5 rounded-lg">
          <p className="text-sm text-left">{data.id}</p>
          <p className="text-right text-sm">{data.name}</p>
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-left">
              Due {dayjs(data.date).format("DD MMM YYYY")}
            </p>

            <p className="text-sm text-left">
              {new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
              }).format(data.amount)}
            </p>
          </div>
          <div className="flex justify-end w-full  items-center">
            <p
              className={`badge badge-outline p-5 w-28 rounded-lg ${statusBox}`}
            >
              {data.status}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
