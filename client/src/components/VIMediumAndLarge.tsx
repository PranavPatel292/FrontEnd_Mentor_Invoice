import { Status } from "./Status";
import { VIButtons } from "./VIButtons";

export const VIMediumAndLarge = () => {
  return (
    <>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-row justify-between shadow-lg p-5">
          <div className="w-full  flex flex-row justify-between md:justify-normal md:space-x-5 items-center">
            <p>Status</p>
            <Status value="paid" />
          </div>
          <div className="flex flex-row space-x-5 items-center">
            <VIButtons />
          </div>
        </div>
      </div>
    </>
  );
};
