import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Containers/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
