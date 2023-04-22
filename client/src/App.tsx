import { SideBar } from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <div className="fixed flex lg:flex-col w-full lg:w-[100px]">
        <SideBar />
      </div>
    </>
  );
}

export default App;
