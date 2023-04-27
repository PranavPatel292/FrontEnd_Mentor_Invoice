import { VIButtons } from "./VIButtons";
import { VIDetails } from "./VIDetails";
import { VIMediumAndLarge } from "./VIMediumAndLarge";
import { VISmall } from "./VISmall";

export const ViewInvoice = () => {
  return (
    <>
      <div className="md:hidden flex flex-col space-y-10 ">
        <div>
          <VISmall />
        </div>
        <div className=" h-[45rem] overflow-y-scroll">
          <VIDetails />
        </div>
        <div className="fixed bottom-0 stat z-[50] bg-slate-500 w-full shadow-2xl flex flex-row justify-between px-10 py-5">
          <VIButtons />
        </div>
      </div>

      <div className="hidden md:flex flex-col space-y-10">
        <VIMediumAndLarge />
        <VIDetails />
      </div>
    </>
  );
};
