import { ReactComponent as DownArrow } from "../assets/icon-arrow-down.svg";
import { ReactComponent as Plus } from "../assets/icon-plus.svg";

export const FilterAndNewActionPanel = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center p-5 ">
        <div className="stat p-0">
          <div className="stat-value">Invoices</div>
          <div className="stat-desc">No invoices</div>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <div className="flex flex-row items-center space-x-5 md:space-x-0">
            <>
              <h1 className="hidden md:block w-28 text-[15px]">
                Filter by status
              </h1>
              <h1 className="md:hidden sm:block">Filter</h1>
            </>
            <DownArrow />
          </div>

          <div className="flex flex-row">
            <button className="btn btn-outline btn-primary btn-square">
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
