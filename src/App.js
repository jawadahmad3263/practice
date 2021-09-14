import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailidList from "./component/DetailidList";
import List from "./component/List";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
       
          <Switch>
            <Route path="/DetailedList/:id" component={DetailidList} />
            <Route path="/" component={List} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
