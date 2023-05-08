import { useQueryClient } from "react-query";
import { makeInvoicePaid } from "../../requests/invoices_requests";

interface VIButtonsProps {
  id: string;
  status: string;
}

export const VIButtons = ({ id, status }: VIButtonsProps) => {
  const queryClient = useQueryClient();
  const { mutate } = makeInvoicePaid();

  const paidHandleClick = () => {
    mutate(id, {
      onError: () => console.log("Something went wrong"),
      onSuccess: (data: any) => {
        queryClient.setQueryData(["getInvoice", id], data.data.data);
        queryClient.invalidateQueries("allInvoices");
      },
    });
  };
  return (
    <>
      <button className=" btn btn-xs sm:btn-sm md:btn-md btn-active btn-ghost rounded-lg">
        Edit
      </button>
      <button className="btn btn-xs sm:btn-sm md:btn-md btn-error rounded-lg">
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
