import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col justify-center content-center gap-10 h-screen">
      <div className="flex justify-center gap-5">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img className="w-20" src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img className="w-20" id="logo" src={reactLogo} alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl text-red-400 font-bold underline text-center">
        Vite + React
      </h1>

      <div className="flex flex-col gap-10 items-center">
        <button
          type="button"
          className="cursor-pointer bg-green-500 px-4 py-2 rounded-md"
          onClick={() => setCount((count) => count + 1)}
        >
          Count: {count}
        </button>

        <p className="text-center">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </main>
  );
}

export default App;
