import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Top from "./components/Top/Top";
// import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div>
      <Router>
        <Top/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
