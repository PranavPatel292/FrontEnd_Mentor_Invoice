import { ReactComponent as Illustration } from "../assets/illustration-empty.svg";

export const NoInvoiceMessage = () => {
  return (
    <>
      <div className="mt-[102px] w-full flex justify-center items-center">
        <div className="flex flex-col space-y-10 justify-center items-center w-[240px]">
          <Illustration />
          <div>
            <h1 className="text-center font-sans text-xl">
              There is nothing here
            </h1>
            <p className="text-center mt-2 font-sans text-[13px] leading-[15px]">
              Create an invoice by clicking the New Invoice button and get
              started
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
