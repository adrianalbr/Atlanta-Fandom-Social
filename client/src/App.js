import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import WelcomeProfile from "./Containers/WelcomeProfile/WelcomeProfile";
import WelcomeTopics from "./Containers/WelcomeTopics/WelcomeTopics";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/firsttopic" component={WelcomeTopics} />
          <Route path="/firstprofile" component={WelcomeProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
