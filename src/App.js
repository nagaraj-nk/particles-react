import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { HomePage } from "./components/router-pages/HomePageRouter";
import ParticlesBackground from "./ParticlesBackground";
function App() {
  return (
    <div className="continer-fluid">
      <ParticlesBackground />
    </div>
  );
}

export default App;
