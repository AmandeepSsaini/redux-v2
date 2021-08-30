import './App.css';
import Header from './Container/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./Container/ProductList"
import ProductDetails from './Container/ProductDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/product/:productID" component={ProductDetails} />
          <Route> 404 Not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
