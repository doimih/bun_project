import { APITester } from "./APITester";
import "./index.css";

// Use server-served static asset URLs to avoid bundling issues

export function App() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src="/logo.svg"
          width={50}
          height={50}
          alt="Bun Logo"
          className="w-[50px] h-[50px] transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
        />
        <img
          src="/react.svg"
          width={50}
          height={50}
          alt="React Logo"
          className="w-[50px] h-[50px] transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
        />
      </div>

      <h1 className="text-5xl font-bold my-4 leading-tight">Bun + React</h1>
      <p>
        Edit <code className="bg-[#1a1a1a] px-2 py-1 rounded font-mono">src/App.tsx</code> and save to test HMR
      </p>
      <APITester />
    </div>
  );
}

export default App;
