import { Status } from "./Status";

export const VISmall = () => {
  return (
    <>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-row justify-between shadow-lg p-5">
          <div className="w-full  mt-5 flex flex-row justify-between md:justify-normal md:space-x-5 items-center">
            <p>Status</p>
            <Status value="pending" />
          </div>
        </div>
      </div>
    </>
  );
};
