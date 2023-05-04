import { useQuery } from "react-query";
import { StringParam, useQueryParam } from "use-query-params";
import { getInvoice } from "../../requests/invoices_requests";
import { VIButtons } from "./VIButtons";
import { VIDetails } from "./VIDetails";
import { VIMediumAndLarge } from "./VIMediumAndLarge";
import { VISmall } from "./VISmall";

export const ViewInvoice = () => {
  const [invoiceId, _] = useQueryParam("invoiceId", StringParam);

  const { data, isLoading } = useQuery(
    ["getInvoice", invoiceId],
    () => getInvoice(invoiceId),
    {
      enabled: invoiceId !== undefined,
    }
  );

  console.log(data);
  return (
    <>
      {!isLoading && (
        <>
          <div className="md:hidden flex flex-col space-y-10">
            <div className="p-5">
              <VISmall status={data.status} />
            </div>
            <div className=" h-[45rem] overflow-y-scroll p-5">
              <VIDetails data={data} />
            </div>
            <div className="fixed bottom-0 stat z-[50] bg-slate-500 w-full shadow-2xl flex flex-row justify-between px-10 py-5">
              <VIButtons />
            </div>
          </div>

          <div className="hidden md:flex flex-col space-y-10">
            <VIMediumAndLarge status={data.status} />
            <VIDetails data={data} />
          </div>
        </>
      )}
    </>
  );
};
