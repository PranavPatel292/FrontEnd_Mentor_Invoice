import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";
import {
  deleteInvoice,
  makeInvoicePaid,
} from "../../requests/invoices_requests";

interface VIButtonsProps {
  id: string;
  status: string;
}

export const VIButtons = ({ id, status }: VIButtonsProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [_, setInvoiceId] = useQueryParam("invoiceId", StringParam);

  const { mutate: mutatePaid } = makeInvoicePaid();
  const { mutate: mutateDelete } = deleteInvoice();

  const paidHandleClick = () => {
    mutatePaid(id, {
      onError: () => console.log("Something went wrong"),
      onSuccess: (data: any) => {
        queryClient.setQueryData(["getInvoice", id], data.data.data);
        queryClient.invalidateQueries("allInvoices");
      },
    });
  };

  const deleteHandleClick = () => {
    mutateDelete(id, {
      onError: () => console.log("something went wrong"),
      onSuccess: () => {
        queryClient.invalidateQueries("allInvoices");
        setInvoiceId(undefined);
        navigate("/");
      },
    });
  };
  return (
    <>
      <button className=" btn btn-xs sm:btn-sm md:btn-md btn-active btn-ghost rounded-lg">
        Edit
      </button>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md btn-error rounded-lg"
        onClick={deleteHandleClick}
      >
        Delete
      </button>
      <button
        disabled={status === "PAID"}
        className="btn btn-xs sm:btn-sm md:btn-md btn-primary rounded-lg"
        onClick={paidHandleClick}
      >
        Paid
      </button>
    </>
  );
};
