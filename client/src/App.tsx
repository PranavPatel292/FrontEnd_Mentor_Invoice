import { SideBar } from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <div className="fixed flex lg:flex-col w-full lg:w-[100px]">
          <SideBar />
        </div>
        <div className="lg:ml-[100px] mt-[77px] w-full h-screen ">
          <div className="max-w-[1280px] mx-auto ">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
