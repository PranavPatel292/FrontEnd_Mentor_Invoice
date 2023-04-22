import { FilterAndNewActionPanel } from "./components/FilterAndNewActionPanel";
import { SideBar } from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <div className="fixed flex lg:flex-col w-full lg:w-[100px]">
          <SideBar />
        </div>
        <div className="lg:ml-[100px] mt-[70px] w-full ">
          <div className="max-w-[730px] mx-auto ">
            <div className="flex flex-col">
              <FilterAndNewActionPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
