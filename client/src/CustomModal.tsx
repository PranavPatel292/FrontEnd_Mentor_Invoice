import { CreateAndEditInvoice } from "./CreateAndEditInvoice";

export const CustomModal = () => {
  return (
    <>
      <label
        htmlFor="my-modal-4"
        className="w-full modal cursor-pointer h-screen overflow-y-auto"
      >
        <CreateAndEditInvoice />
      </label>
    </>
  );
};
