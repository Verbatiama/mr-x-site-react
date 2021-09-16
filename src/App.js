import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navbar from "./components/navbar"
import Gossip from "./Pages/Gossip"
import Island from "./Pages/Island"
import Mrx from "./Pages/MrX"
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/gossip' component={Gossip} />
        <Route path='/Island' component={Island} />
        <Route path='/MrX' component={Mrx} />
      </Switch>
    </Router>
  );
}

export default App;