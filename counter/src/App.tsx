import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import ThemeToggler from "./components/ThemeToggler";
import { ThemeProvider } from "./context/ThemeContext";
import StopWatch from "./components/StopWatch";
import Clock from "./components/Clock";

const App = () => {
  const [activeTab, setActiveTab] = useState("Clock");
  useEffect(() => {
    document.title = `${activeTab}`;
  }, [activeTab]);
  return (
    <div className="app">
      <div className="nav">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        
      </div>

      <ThemeProvider>
      <ThemeToggler />
        <div className="app-body">
          {activeTab === "Counter" && <Counter />}
          {activeTab === "To-do" && <Todo />}
          {activeTab === "Stopwatch" && <StopWatch/>}
          {activeTab==="Clock" && <Clock/> }
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
