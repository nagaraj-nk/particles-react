import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { HomePage } from "./components/router-pages/HomePageRouter";
function App() {
  return (
    <div className="continer-fluid">
      <HomePage />
    </div>
  );
}

export default App;
