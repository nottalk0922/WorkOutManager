import Main from './component/Main'
import Dayroutine from './component/Dayroutine';
import Weekroutine from './component/Weekroutine';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={Main} />
        <Route path='/Dayroutine' component={Dayroutine} />
        <Route path='/Weekroutine' component={Weekroutine} />
      </Router>
    </>  
  );
}

export default App;
