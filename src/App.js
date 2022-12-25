import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FollowersPage from './pages/FollowersPage/FollowersPage';
import Banner from './components/Banner/Banner';
import './App.css';
import TodoPage from './pages/TodoPage/TodoPage';
function App() {
  return (
    <div className="App">
      <Banner />
      <Router> 
        <Routes>        
         <Route exact path="/" element={< TodoPage />}/>
          <Route exact path="/followers" element={<FollowersPage />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
