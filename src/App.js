import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
