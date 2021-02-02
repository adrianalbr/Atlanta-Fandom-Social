import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './Containers/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
       {/* <Navbar/> */}
       <Switch>
         <Route path="/" component={Home}/>
       </Switch>
       {/* <Footer/> */}
     </Router>
    </div>
  );
}

export default App;
