import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";
import { getInvoice } from "../../requests/invoices_requests";
import { ReactComponent as LeftArrow } from "../assets/icon-arrow-left.svg";
import { VIButtons } from "./VIButtons";
import { VIDetails } from "./VIDetails";
import { VIMediumAndLarge } from "./VIMediumAndLarge";
import { VISmall } from "./VISmall";

export const ViewInvoice = () => {
  const [invoiceId, setInvoiceId] = useQueryParam("invoiceId", StringParam);

  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    ["getInvoice", invoiceId],
    () => getInvoice(invoiceId),
    {
      enabled: invoiceId !== undefined,
    }
  );

  return (
    <>
      {!isLoading && data && (
        <>
          <div
            className="mt-10 md:mt-10 lg:-mt-5 px-5 flex flex-row space-x-3 items-center hover:cursor-pointer hover:underline"
            onClick={() => {
              setInvoiceId(undefined);
              navigate("/");
            }}
          >
            <LeftArrow />
            <h1>Go back</h1>
          </div>
          <div className="md:hidden flex flex-col space-y-10">
            <div className="p-5">
              <VISmall status={data.status} />
            </div>
            <div className=" h-[45rem] overflow-y-scroll p-5">
              <VIDetails data={data} />
            </div>
            <div className="fixed bottom-0 stat z-[50] bg-slate-500 w-full shadow-2xl flex flex-row justify-between px-10 py-5">
              <VIButtons id={data.id} status={data.status} />
            </div>
          </div>

          <div className="hidden md:flex flex-col space-y-10">
            <VIMediumAndLarge status={data.status} id={data.id} />
            <VIDetails data={data} />
          </div>
        </>
      )}
    </>
  );
};
