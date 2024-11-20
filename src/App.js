import { useState } from "react";
import Footer from "./components/footer/Footer";
import Home from "./components/menu/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [theme, setTheme] = useState("lofi");

  return (
    <div data-theme={theme} className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300 dark:bg-gray-900 overflow-hidden">
      <Navbar setTheme={setTheme} theme={theme} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;


// useEffect(() => {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     setTheme("business")
//   }
// }, [])