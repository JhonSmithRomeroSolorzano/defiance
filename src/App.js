import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Login from './login/login';
import CampaignDetail from './campaigns/campaignDetail';

function App() {
  return (  
    <Router>
      <Switch>
        <Route path="/detail" exact component={CampaignDetail}></Route>
        <Route path="/" exact component={Login}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
