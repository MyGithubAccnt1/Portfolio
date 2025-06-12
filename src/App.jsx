import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
