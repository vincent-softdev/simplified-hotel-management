import "./App.css";
import StaysDashboard from "./pages/stays/dashboard";
import Header from "./views/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <StaysDashboard />
      </div>
    </div>
  );
}

export default App;
