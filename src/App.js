import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    
    <main>
      <BrowserRouter>
        <Switch>
      

          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
   
    </main>
  );
}



export default App;
