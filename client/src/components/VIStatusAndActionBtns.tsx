import { Status } from "./Status";
import { VIButtons } from "./VIButtons";

export const VIStatusAndActionBtns = () => {
  return (
    <>
      <div className="mt-10 lg:mt-0 md:flex flex-row justify-between shadow-lg p-5">
        <div className="w-full  flex flex-row justify-between md:justify-normal md:space-x-5 items-center">
          <p>Status</p>
          <Status value="paid" />
        </div>
        <div className="hidden md:flex flex-row space-x-5 items-center">
          <VIButtons />
        </div>
      </div>
    </>
  );
};
