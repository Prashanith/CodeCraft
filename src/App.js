import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './Components/Registration/register';
import Home from './Components/home/home';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>     
            <Route path="/register" component={Register}/>
            <Route path="/" component={Home} />             
            <Route path="*" component={Home} />           
          </Switch>
      </Router>      
    </div>
  );
}


// function Dummy() {
//   return (
//     <div>
//       check
      
//     </div>
//   )
// }



export default App;
