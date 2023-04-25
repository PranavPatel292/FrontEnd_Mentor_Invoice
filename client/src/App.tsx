import Modal from "react-modal";
import { CustomModal } from "./CustomModal";
import { SideBar } from "./components/SideBar/SideBar";
import { ViewInvoice } from "./components/ViewInvoice";

function App() {
  Modal.setAppElement("#root");
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <CustomModal />
      <div className="flex lg:flex-row flex-col">
        <div className="fixed flex lg:flex-col w-full lg:w-[100px]">
          <SideBar />
        </div>
        <div className="lg:ml-[100px] mt-[65px] lg:mt-[50px] w-full ">
          <div className="max-w-[730px] mx-auto ">
            <div className=" flex  flex-col space-y-5">
              <ViewInvoice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
