import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './coponents/Header';
import Details from './coponents/Details';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" Component={Header}/>
        <Route path="/book/:bookId" Component={Details}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
