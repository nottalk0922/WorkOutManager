import Main from './component/Main'
import Dayroutin from './component/Dayroutin';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={Main} />
        <Route path='/Dayroutine' component={Dayroutin} />
      </Router>
    </>  
  );
}

export default App;
