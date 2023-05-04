import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { CustomModal } from "./CustomModal";
import { FilterAndNewActionPanel } from "./components/FilterAndNewActionPanel";
import { InvoiceItem } from "./components/InvoiceItem";
import { SideBar } from "./components/SideBar/SideBar";
import { ViewInvoice } from "./components/ViewInvoice";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                  />
                  <CustomModal />
                  <div className="flex lg:flex-row flex-col">
                    <div className="fixed flex lg:flex-col w-full lg:w-[100px]">
                      <SideBar />
                    </div>
                    <div className="lg:ml-[100px] mt-[65px] lg:mt-[50px] w-full ">
                      <div className="max-w-[730px] mx-auto ">
                        <div className=" flex  flex-col space-y-5">
                          <FilterAndNewActionPanel />
                          <InvoiceItem />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
            />
            <Route
              path={"/viewInvoice"}
              element={
                <div className="flex lg:flex-row flex-col">
                  <div className="fixed flex lg:flex-col w-full lg:w-[100px]">
                    <SideBar />
                  </div>
                  <div className="lg:ml-[100px] mt-[65px] lg:mt-[50px] w-full ">
                    <div className="max-w-[730px] mx-auto ">
                      <div className=" flex  flex-col space-y-5 ">
                        <ViewInvoice />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </QueryClientProvider>
      </QueryParamProvider>
    </BrowserRouter>
  );
}

export default App;
