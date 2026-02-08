import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002");
        if (!response.ok) {
          console.log("Error fetching data:", response.statusText);
          throw new Error("Error");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

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

      {data && (
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Data from Server:</h2>
          <pre className="bg-gray-200 p-2 rounded-md overflow-x-auto">
            {JSON.stringify(data.user, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}

export default App;
