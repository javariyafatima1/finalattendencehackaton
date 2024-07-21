import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Header from './component/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Route path="/" element={<Home />}/>
          </BrowserRouter>
          <h1>ggh</h1>
    </div>
  );
}

export default App;
