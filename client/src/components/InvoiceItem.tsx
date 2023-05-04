import * as dayjs from "dayjs";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";
import { getAllInvoices } from "../../requests/invoices_requests";
import { ReactComponent as RightArrow } from "../assets/icon-arrow-right.svg";
import { NoInvoiceMessage } from "./NoInvoiceMessage";

export const InvoiceItem = () => {
  const { data, isLoading } = useQuery(["allInvoices"], getAllInvoices);
  const [_, setInvoiceId] = useQueryParam("invoiceId", StringParam);

  let statusBox = "";
  const navigation = useNavigate();

  const handleOnClick = (id: string) => {
    setInvoiceId(id);
    navigation(`/viewInvoice?invoiceId=${id}`);
  };

  return (
    <>
      {data?.length === 0 && !isLoading ? (
        <NoInvoiceMessage />
      ) : (
        <>
          {!isLoading &&
            data?.map((item: any, index: number) => {
              switch (item.status) {
                case "PAID":
                  statusBox = "badge-success";
                  break;
                case "PENDING":
                  statusBox = "badge-warning";
                  break;
              }
              return (
                <div key={index} onClick={() => handleOnClick(item.id)}>
                  <div className="hidden md:block w-full hover:cursor-pointer">
                    <div className="p-5 md:flex md:flex-row md:justify-between md:items-center md:shadow-lg bg-primary/5 rounded-lg">
                      <p className="max-w-[20%] truncate">{item.id}</p>
                      <p className="">
                        Due {dayjs(item.date).format("DD MMM YYYY")}
                      </p>
                      <p className="">{item.name}</p>
                      <p className="">
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                        }).format(item.totalPrice)}
                      </p>
                      <p
                        className={`badge badge-outline p-4 rounded-lg ${statusBox}`}
                      >
                        {item.status}
                      </p>
                      <RightArrow className="sm:hidden md:block" />
                    </div>
                  </div>

                  <div className="block p-5 md:hidden w-full hover:cursor-pointer">
                    <div className="p-5 grid grid-cols-2 gap-4 bg-primary/5 rounded-lg">
                      <p className="text-sm text-left max-w-[100%] truncate">
                        {item.id}
                      </p>
                      <p className="text-right text-sm">{item.name}</p>
                      <div className="flex flex-col space-y-2">
                        <p className="text-sm text-left">
                          Due {dayjs(item.date).format("DD MMM YYYY")}
                        </p>

                        <p className="text-sm text-left">
                          {new Intl.NumberFormat("en-AU", {
                            style: "currency",
                            currency: "AUD",
                          }).format(item.totalPrice)}
                        </p>
                      </div>
                      <div className="flex justify-end w-full  items-center">
                        <p
                          className={`badge badge-outline p-5 w-28 rounded-lg ${statusBox}`}
                        >
                          {item.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </>
  );
};
