import './App.css';
import {Outlet} from "react-router";
import {NavigationPanel} from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Outlet />
      <NavigationPanel />
    </div>
  );
}

export default App;
