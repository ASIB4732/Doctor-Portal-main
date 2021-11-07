import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Componente/home/home/Home';
import Appointment from './Componente/Appointment/Appointment/Appointment';
import LogIn from './Componente/LogIn/LogIn';
import PrivetRoute from './Componente/PrivetRoute/PrivetRoute';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
           <Home></Home>
          </Route>

          <PrivetRoute path='/Appointment'>
            <Appointment></Appointment>
          </PrivetRoute>
          
          <Route path='/logIn'>
            <LogIn></LogIn>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
